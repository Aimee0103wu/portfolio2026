/**
 * 1. RELOAD VS NAVIGATION LOGIC
 */
(function() {
    const perfEntries = performance.getEntriesByType("navigation");
    const isReload = perfEntries.length > 0 && perfEntries[0].type === "reload";
    if (isReload || !sessionStorage.getItem('session_initialized')) {
        Object.keys(sessionStorage).forEach(key => {
            if (key.startsWith('chat_history_')) sessionStorage.removeItem(key);
        });
        sessionStorage.setItem('session_initialized', 'true');
    }
})();

// --- GLOBAL CONSTANTS & STATE ---
const AI_LOGO_SVG = `<svg class="logo-status-icon logo-blinking" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.36597 25.7561H22.6343C22.0989 27.4592 20.5202 28.6179 18.7349 28.6179H13.2653C11.4801 28.6179 9.90131 27.4592 9.36597 25.7561Z" fill="#2563EB"/>
    <path d="M20.0325 0C22.6839 0 24.9138 1.68834 25.564 3.97942C28.9166 4.47721 31.4796 7.19578 31.4796 10.4751C31.4796 11.9834 30.9369 13.3726 30.0251 14.4822C30.457 15.3353 30.6991 16.2891 30.6991 17.296C30.6991 20.6205 28.065 23.3684 24.6445 23.8107C24.364 24.3416 24.065 24.9756 22.8942 25.2358H9.10563C7.9349 24.9756 7.63568 24.3417 7.35512 23.8107C3.93474 23.3683 1.30075 20.6204 1.30075 17.296C1.30077 16.2892 1.54265 15.3353 1.97453 14.4822C1.06278 13.3727 0.520266 11.9833 0.520264 10.4751C0.520264 7.19586 3.08315 4.47731 6.43566 3.97942C7.08583 1.68831 9.31593 0 11.9674 0C13.5405 0 14.9653 0.594308 15.9999 1.55615C17.0345 0.594308 18.4594 0 20.0325 0Z" fill="#2563EB"/>
    <path d="M12.2275 29.1382H20.0324C19.7258 30.7966 18.2795 32 16.593 32H15.667C13.9805 32 12.5342 30.7966 12.2275 29.1382Z" fill="#2563EB"/>
    <path d="M13.0509 19.5122H9.17065L13.5424 6.26758H18.4574L22.8292 19.5122H18.9489L16.0517 9.91503H15.9482L13.0509 19.5122ZM12.3266 14.2868H19.6215V16.9771H12.3266V14.2868Z" fill="white"/>
    </svg>`;

let isTyping = false;
let currentProjectId = 'home';
let defaultHomePrompts = '';
let isFullViewMode = false;

// --- GLOBAL UTILITIES (Must be outside to be visible everywhere) ---
const saveState = (id, html) => { if (id) sessionStorage.setItem(`chat_history_${id}`, html); };
const getState = (id) => sessionStorage.getItem(`chat_history_${id}`);

function renderInstantPair(userText, aiHtml) {
    const projectMessages = document.getElementById('project-messages');
    
    const userWrapper = document.createElement('div');
    userWrapper.className = "flex flex-col items-end mb-8 w-full px-4 user-message-instance reveal-item";
    userWrapper.innerHTML = `<div class="bg-[#3b5cf6] text-white px-6 py-3 rounded-[24px] rounded-tr-none max-w-[80%] shadow-sm"><p class="text-base font-medium">${userText}</p></div>`;
    projectMessages.appendChild(userWrapper);

    const aiWrapper = document.createElement('div');
    aiWrapper.className = "mb-16 w-full px-4 flex gap-4 items-start reveal-item";
    aiWrapper.innerHTML = `<div class="flex-shrink-0 mt-1 logo-wrapper">${AI_LOGO_SVG}</div><div class="w-full text-gray-800 text-base leading-relaxed">${aiHtml}</div>`;
    projectMessages.appendChild(aiWrapper);
}

function renderCurrentPageFull() {
    const projectMessages = document.getElementById('project-messages');
    const promptContainer = document.querySelector('#prompt-container');
    projectMessages.innerHTML = ''; 

    if (currentProjectId === 'home') {
        const homePrompts = [
            { label: 'How can we work together?', key: 'contact' },
            { label: 'What is your design stack?', key: 'stack' },
            { label: 'Tell me about your design philosophy', key: 'philosophy' }
        ];
        homePrompts.forEach(p => renderInstantPair(p.label, GENERAL_ANSWERS[p.key]));
    } else if (typeof PROJECT_CONTENT !== 'undefined' && PROJECT_CONTENT[currentProjectId]) {
        const project = PROJECT_CONTENT[currentProjectId];
        const introDiv = document.createElement('div');
        introDiv.className = "mb-16 w-full px-4 reveal-item";
        introDiv.innerHTML = project.jumpstart;
        projectMessages.appendChild(introDiv);

        const phases = [
            { label: 'View problem & challenge', key: 'problem' },
            { label: 'Explore design Solutions', key: 'solutions' },
            { label: 'See the impact and results', key: 'results' },
            { label: 'Retro & learnings', key: 'retro' }
        ];
        phases.forEach(phase => {
            if (project[phase.key]) renderInstantPair(phase.label, project[phase.key]);
        });
    }
    if (promptContainer) promptContainer.style.display = 'none';
}

window.toggleViewMode = function() {
    if (isTyping) return;
    isFullViewMode = !isFullViewMode;
    const btn = document.getElementById('show-all-toggle');
    const btnText = btn.querySelector('span');
    const btnIcon = btn.querySelector('.icon-container');

    // Umami event tracking
    if (window.umami) umami.track('toggle-full-view', { mode: !isFullViewMode });

    if (isFullViewMode) {
        btnText.textContent = "Back to Chat";
        btn.style.backgroundColor = "#2563eb"; // Solid Blue
        btn.classList.add('view-mode-active');
        btnIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`;
        renderCurrentPageFull();
    } else {
        btnText.textContent = "Show all content";
        btn.style.backgroundColor = "#111827"; // Solid Dark
        btn.classList.add('view-mode-active');
        btnIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`;
        if (currentProjectId === 'home') window.goHome();
        else window.startProject(currentProjectId);
    }
};

// --- DOM CONTENT LOADED BLOCK ---
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('main-chat-container');
    const landingContent = document.getElementById('landing-content');
    const projectMessages = document.getElementById('project-messages');
    const promptContainer = document.querySelector('#prompt-container');

    if (promptContainer) defaultHomePrompts = promptContainer.innerHTML;

    window.goHome = function() {
        if (isTyping) return;
        if (currentProjectId) saveState(currentProjectId, projectMessages.innerHTML);
        currentProjectId = 'home';
        landingContent.style.display = 'block'; 
        projectMessages.style.display = 'block';
        projectMessages.classList.add('pt-12');
        const savedHistory = getState('home');
        projectMessages.innerHTML = savedHistory || '';
        if (promptContainer) {
            promptContainer.innerHTML = defaultHomePrompts; 
            promptContainer.style.display = isFullViewMode ? 'none' : 'flex';
        }
        updateSidebarUI('home');
        requestAnimationFrame(() => { chatContainer.scrollTop = savedHistory ? chatContainer.scrollHeight : 0; });
        if (isFullViewMode) renderCurrentPageFull();
    };

    window.startProject = function(projectId) {
        if (isTyping) return;

        // Umami event tracking
        if (window.umami) umami.track('project-click', { project: projectId });

        if (currentProjectId) saveState(currentProjectId, projectMessages.innerHTML);
        if (typeof PROJECT_CONTENT === 'undefined' || !PROJECT_CONTENT[projectId]) return;
        currentProjectId = projectId;
        landingContent.style.display = 'none';
        projectMessages.style.display = 'block';
        projectMessages.classList.remove('pt-12');
        const savedHistory = getState(projectId);

        if (savedHistory) {
            projectMessages.innerHTML = savedHistory;
            requestAnimationFrame(() => { chatContainer.scrollTop = projectMessages.querySelector('.user-message-instance') ? chatContainer.scrollHeight : 0; });
        } else {
            projectMessages.innerHTML = '';
            chatContainer.scrollTop = 0;
            addMessage(PROJECT_CONTENT[projectId].jumpstart);
            requestAnimationFrame(() => { chatContainer.scrollTop = 0; });
        }
        updateProjectPrompts(projectId);
        updateSidebarUI(projectId);
        if (isFullViewMode) renderCurrentPageFull();
    };

    // --- OTHER CORE FUNCTIONS (Modified to stay inside) ---
    function addMessage(htmlContent) {
        const messageDiv = document.createElement('div');
        messageDiv.className = "mb-16 w-full px-4";
        messageDiv.innerHTML = htmlContent;
        projectMessages.appendChild(messageDiv);
        saveState(currentProjectId, projectMessages.innerHTML);
    }

    window.addUserMessage = function(text) {
        const userWrapper = document.createElement('div');
        userWrapper.className = "flex flex-col items-end mb-8 w-full px-4 user-message-instance";
        userWrapper.innerHTML = `<div class="bg-[#3b5cf6] text-white px-6 py-3 rounded-[24px] rounded-tr-none max-w-[80%] shadow-sm"><p class="text-base font-medium">${text}</p></div>`;
        projectMessages.appendChild(userWrapper);
        saveState(currentProjectId, projectMessages.innerHTML);
        setTimeout(() => {
            const bubbleRect = userWrapper.getBoundingClientRect();
            chatContainer.scrollTo({ top: chatContainer.scrollTop + (bubbleRect.top - chatContainer.getBoundingClientRect().top) - 100, behavior: 'smooth' });
        }, 30);
    };

    window.typeMessage = function(htmlContent) {
        if (isTyping) return;
        isTyping = true;
        if (promptContainer) { promptContainer.style.opacity = "0.5"; promptContainer.style.pointerEvents = "none"; }
        const messageDiv = document.createElement('div');
        messageDiv.className = "mb-16 w-full px-4 flex gap-4 items-start";
        messageDiv.innerHTML = `<div class="flex-shrink-0 mt-1 logo-wrapper">${AI_LOGO_SVG}</div><div class="typewriter-target w-full text-gray-800 text-base leading-relaxed"></div>`;
        projectMessages.appendChild(messageDiv);
        const target = messageDiv.querySelector('.typewriter-target');
        const logo = messageDiv.querySelector('svg');
        const temp = document.createElement('div');
        temp.innerHTML = htmlContent;
        typeNode(temp, target, () => {
            isTyping = false;
            if (promptContainer) { promptContainer.style.opacity = "1"; promptContainer.style.pointerEvents = "auto"; }
            logo.classList.remove('logo-blinking');
            saveState(currentProjectId, projectMessages.innerHTML);
        });
    };

    function typeNode(source, destination, callback) {
        const nodes = Array.from(source.childNodes);
        let nodeIndex = 0;
        function processNextNode() {
            if (nodeIndex >= nodes.length) { if (callback) callback(); return; }
            const currentNode = nodes[nodeIndex];
            if (currentNode.nodeType === Node.TEXT_NODE) {
                let charIndex = 0;
                const text = currentNode.textContent;
                const textSpan = document.createElement('span');
                destination.appendChild(textSpan);
                function typeChar() {
                    if (charIndex < text.length) {
                        const chunk = text.slice(charIndex, charIndex + 2);
                        textSpan.textContent += chunk;
                        charIndex += 2;
                        setTimeout(typeChar, chunk.includes('.') ? 80 : 12);
                    } else { nodeIndex++; processNextNode(); }
                }
                typeChar();
            } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                const newElement = currentNode.cloneNode(currentNode.tagName.toLowerCase() === 'svg');
                destination.appendChild(newElement);
                if (currentNode.tagName.toLowerCase() !== 'svg') typeNode(currentNode, newElement, () => { nodeIndex++; processNextNode(); });
                else { nodeIndex++; processNextNode(); }
            } else { nodeIndex++; processNextNode(); }
        }
        processNextNode();
    }

    // --- REMAINDER OF SIDEBAR / MODAL LOGIC ---
    window.updateProjectPrompts = function(projectId) {
        if (!promptContainer) return;
        promptContainer.innerHTML = '';
        promptContainer.style.display = isFullViewMode ? 'none' : 'flex';
        const steps = [
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg> View problem & challenge`, key: 'problem' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 1 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg> Explore design Solutions`, key: 'solutions' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg> See the impact and results`, key: 'results' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg> Retro & learnings`, key: 'retro' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> Go back to Home`, key: 'home' }
        ];
        steps.forEach(step => {
            const btn = document.createElement('button');
            btn.className = "bg-[#F3F4F6] border border-[#111928] px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition text-[#111928]";
            btn.innerHTML = step.html;
            btn.onclick = () => {
                if (isTyping) return;

                // Umami event tracking
                if (window.umami) umami.track('prompt-click', { project: projectId, prompt: step.key });

                if (step.key === 'home') window.goHome();
                else { addUserMessage(btn.innerText.trim()); setTimeout(() => { typeMessage(PROJECT_CONTENT[projectId][step.key]); }, 400); }
            };
            promptContainer.appendChild(btn);
        });
    }

    function updateSidebarUI(projectId) {
        document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'font-medium'));
        const activeLink = document.getElementById(projectId === 'home' ? 'nav-home' : `nav-${projectId}`);
        if (activeLink) activeLink.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'font-medium');
    }

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.id.replace('nav-', '');
            if (targetId === 'home') window.goHome();
            else window.startProject(targetId);
        });
    });
});

// --- RESUME MODAL ---
    window.viewResume = function() {

        // Umami event tracking
        if (window.umami) umami.track('view-resume');

        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeResume = function() {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // --- SIDEBAR EXPAND/COLLAPSE LOGIC ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const sidebar = document.querySelector('aside');
    const sidebarNav = document.getElementById('sidebar-nav');
    const mainContent = document.querySelector('main');
    const sidebarTitle = document.querySelector('.sidebar-title');

    let isSidebarOpen = false;
    function applySidebarState(open) {
        isSidebarOpen = !!open;
        if (!sidebar || !mainContent || !sidebarNav) return;

        const backdrop = document.getElementById('sidebar-backdrop');
        if (isSidebarOpen) {
            sidebar.classList.remove('w-20');
            sidebar.classList.add('w-72');
            if (sidebarTitle) sidebarTitle.classList.remove('hidden');
            mainContent.classList.remove('ml-20');
            mainContent.classList.add('ml-72');
            sidebarNav.classList.remove('opacity-0');
            // On mobile, show the backdrop when the sidebar is open
            if (backdrop && window.innerWidth < 768) backdrop.classList.remove('hidden');
        } else {
            sidebar.classList.remove('w-72');
            sidebar.classList.add('w-20');
            if (sidebarTitle) sidebarTitle.classList.add('hidden');
            mainContent.classList.remove('ml-72');
            mainContent.classList.add('ml-20');
            sidebarNav.classList.add('opacity-0');
            // Always hide the backdrop when the sidebar is closed
            if (backdrop) backdrop.classList.add('hidden');
        }
    }

    function toggleSidebar() { applySidebarState(!isSidebarOpen); }

    if (hamburgerButton) hamburgerButton.addEventListener('click', toggleSidebar);

    // Initialize: expanded on desktop, collapsed on mobile
    const isDesktop = window.innerWidth >= 768;
    applySidebarState(isDesktop);

    // Allow clicking the backdrop to close the sidebar on mobile
    const backdropEl = document.getElementById('sidebar-backdrop');
    if (backdropEl) backdropEl.addEventListener('click', () => applySidebarState(false));

    // On breakpoint cross, reset to defaults (desktop=expanded, mobile=collapsed)
    let lastIsDesktop = isDesktop;
    window.addEventListener('resize', () => {
        const nowDesktop = window.innerWidth >= 768;
        if (nowDesktop !== lastIsDesktop) {
            applySidebarState(nowDesktop);
            lastIsDesktop = nowDesktop;
        }
    });