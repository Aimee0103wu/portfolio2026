const GENERAL_ANSWERS = {
    "contact": `
        <div class="space-y-6">
            <p>I'm currently open to new opportunities and collaborations. Here is how you can reach me:</p>
            <div class="grid grid-cols-1 gap-4 max-w-md">
                <a href="mailto:aimee.wu@example.com" class="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-300 transition group">
                    <div class="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div><p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</p><p class="text-gray-900 font-medium">aimee0103wu@gmail.com</p></div>
                </a>
                <a href="https://linkedin.com/in/ijouwu/" target="_blank" class="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-300 transition group">
                    <div class="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/></svg>
                    </div>
                    <div><p class="text-xs font-bold text-gray-400 uppercase tracking-wider">LinkedIn</p><p class="text-gray-900 font-medium">Aimee Wu</p></div>
                </a>
            </div>
        </div>`,

    "stack": `
        <div class="space-y-6">
            <p>My toolkit is built for scalability and cross-functional collaboration. I focus on tools that allow for rapid iteration without sacrificing precision.</p>
            
            <div class="grid grid-cols-1 gap-3 max-w-md">
                <div class="p-4 border border-gray-100 rounded-2xl bg-gray-50/50">
                    <h4 class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Design & Prototyping</h4>
                    <p class="text-gray-800 font-medium">Figma</p>
                </div>
                <div class="p-4 border border-gray-100 rounded-2xl bg-gray-50/50">
                    <h4 class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Illustration & Photo editing</h4>
                    <p class="text-gray-800 font-medium">Adobe Creative Suite, Affinity</p>
                </div>
                <div class="p-4 border border-gray-100 rounded-2xl bg-gray-50/50">
                    <h4 class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Rapid "vibe coding" & Prototyping</h4>
                    <p class="text-gray-800 font-medium">HTML/CSS, AI-Assisted Dev</p>
                </div>
            </div>
        </div>`,

    "philosophy": `
        <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-900">Design is a functional dialogue.</h3>
            <p>I believe that great design happens at the intersection of user empathy and business logic. My approach is rooted in three core pillars:</p>            
            <ul class="space-y-4 mt-4">
                <li class="flex gap-3">
                    <span class="text-blue-600 font-bold">01</span>
                    <span><strong>Systemic Empathy:</strong> I strive to master the underlying technical constraints so I can translate complex engineering logic into intuitive user experiences.</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-blue-600 font-bold">02</span>
                    <span><strong>The Dynamic North Star:</strong> I design with a fixed long-term vision but an agile execution. I believe in working in iterative steps that provide immediate value while remaining flexible enough to adapt as the "goalposts" of the product landscape shift..</span>
                </li>
                <li class="flex gap-3">
                    <span class="text-blue-600 font-bold">03</span>
                    <span><strong>Clarity by Design:</strong> I don't just design for the "happy path." My goal is to create interfaces where the next step is always certain, ensuring that even the most complex edge cases feel as intentional and simple as the primary workflow.</span>
                </li>
            </ul>
        </div>`
};

const PROJECT_CONTENT = {
    // --- PROJECT 1: VM CONNECT ---
    "vm-connect": {
        jumpstart: `
            <div class="space-y-4 animate-fade-in text-left">
                <div class="space-y-2">
                    <div class="flex gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                        <span>2023-2025</span> • <span>Azure Web Portal</span>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-900 leading-tight text-balance">Connect to Virtual Machine</h1>
                </div>

                <p class="text-gray-700"><b>Role:</b> Lead Product Designer</p>
                <p class="text-gray-700"><b>Team:</b> 2 Engineers, 1 Researcher, 1 Content Designer</p>

                <p class="text-gray-700 leading-relaxed">
                    Connecting to a Virtual Machine is a "make or break" moment in the cloud journey. Historically, the legacy experience was a "black box" that led to frequent failures and high support volume.
                </p>

                <div class="pl-4 border-l-2 border-blue-400 py-1">
                    <p class="text-gray-800 leading-relaxed">
                        I designed a proactive access-readiness system that evaluates networking security layers in real-time to guide users toward valid connection paths.
                    </p>
                </div>

                <hr class="border-gray-300 w-full" />

                <p class="text-gray-700 leading-relaxed">
                    ⭐ <b>The Impact</b> Reduced VM-related support cases by 25% and eliminated the "retry-and-fail" loop for thousands of engineers.
                </p>

                <img src="images/vmconnect_overview.gif" alt="VM Connect Overview" class="rounded-xl shadow-lg border border-gray-200 w-full" />
            </div>
        `,
        problem: `
            <div class="space-y-6">
                <div>
                    <p class="text-gray-700">The legacy experience suffered from <strong>"Hidden Readiness."</strong> Customers would attempt to connect, only to face a generic timeout error because a security rule or network policy was blocking them behind the scenes.</p>
                    
                    <h3 class="text-lg font-bold text-gray-900 mt-6">The Trial-and-Error Loop</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Fragmented Guidance:</strong> Users had to hop between the Portal, external docs, and manual settings.</li>
                        <li><strong>Blind Attempts:</strong> No visibility into why a connection was failing (Public vs. Private IP, NSG, or JIT).</li>
                        <li><strong>Support Burden:</strong> Basic access issues drove high-volume, expensive support incidents.</li>
                    </ul>
                </div>

                <hr class="border-gray-100" />

                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Design Challenge</h3>
                    <p class="text-xl font-semibold text-gray-900 mb-4">
                        "How might we ensure customers always know whether and how they can connect to a VM—before they try and fail?"
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        Connecting to a VM depends on a complex interplay of <strong>networking, NSG rules, JIT, and Bastion availability</strong>. Telemetry revealed that these gaps weren't just technical—they were visibility gaps. We needed to make the VM's access state "intelligible" so users could choose valid paths before hitting a wall.
                    </p>
                </div>
                
                <img src="images/vmconnect_v1.png" alt="Legacy Problem Visualization" class="rounded-xl shadow-lg border border-gray-200 w-full" />
            </div>
        `,
        solutions: `
            <div class="space-y-8">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">1. Proactive Access Readiness</h3>
                    <p class="text-gray-700 mb-4">We shifted from "connect and fail" to validating accessibility upfront. In collaboration with engineering, we integrated platform APIs to surface signals across three critical layers:</p>
                    
                    <div class="flex flex-row gap-3 mb-8 w-full"> 

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Policy layer</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">Global and subscription level security rules and policies.</p>
                        </div>

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Subnet layer</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">Security rules governing the entire subnet traffic.</p>
                        </div>

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">NIC layer</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">VM-specific security rules that permit/deny inbound paths.</p>
                        </div>

                    </div>

                    <img src="images/vmconnect_solution1.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full" />
                </div>

                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">2. Comprehensive Scenario Guidance</h3>
                    <p class="text-gray-700">Instead of making implicit assumptions, VM Connect V3 explicitly maps the "Why" behind available paths. Whether it's <strong>VPN-based access, JIT-restricted IPs, or customized VM destination settings</strong>, the experience explains exactly which paths are open, which are not, and how to unblock the paths.</p>
                    <ul class="mt-3 space-y-2 text-gray-700">
                        <li class="flex items-start gap-2">
                            <span class="text-blue-600">•</span>
                            <span><strong class="text-blue-600">Visual Diagnostics:</strong> Users see blocking conditions (like missing IP paths) before attempting a connection.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-blue-600">•</span>
                            <span><strong class="text-blue-600">Intent Recognition:</strong> By surfacing common alternatives early, we help users choose the most secure viable path for their specific configuration.</span>
                        </li>
                    </ul>

                    <img src="images/vmconnect_solution2.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>

                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">3. The "Big Card" Quick Actions</h3>
                    <p class="text-gray-700">Telemetry showed <strong>80% of users</strong> use Native RDP/SSH. We introduced prominent Quick Action cards to surface the most likely method with all essential details visible in one place—removing friction for the majority while preserving flexibility for advanced setups.</p>
                    <img src="images/vmconnect_solution3.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>
            </div>
        `,
        results: `
            <div class="space-y-6 text-left">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Measurable Confidence</h3>
                    <p class="text-gray-700">Following the 100% production rollout, we monitored support volume and user success signals to validate the impact of the proactive diagnostic approach.</p>
                </div>

                <div class="flex flex-row gap-4 w-full justify-start">
                    <div class="w-full md:w-1/2 p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-center">
                        <p class="text-3xl font-bold text-blue-600">25% Reduction</p>
                        <p class="text-sm text-gray-600 font-medium mt-1">In monthly support cases (~100 fewer tickets per month)</p>
                    </div>
                </div>

                <p class="text-gray-700 mt-4">
                    ⭐ <b>The Shift:</b> By surfacing blockers—like closed ports or disabled JIT access—before the user attempts to connect, we transformed a high-friction technical hurdle into a guided, self-healing workflow.
                </p>
            </div>
        `,
        retro: `
            <div class="space-y-8 text-left">
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </span>
                            1. Designing Without a Safety Net: Engineering-Led Collaboration
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Due to staffing gaps, I led this initiative without a dedicated PM for the majority of the project lifecycle. This required me to step beyond traditional design boundaries and act as a bridge between user needs and deep technical constraints.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Deep-Dive Triage:</strong> I worked in lockstep with my engineering partners to untangle the "black box" of Azure networking logic. By treating engineers as co-designers, we translated complex VM connectivity protocols into human-readable UI.</span>
                            </li>
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>The Learning:</strong> This experience taught me that technical literacy is a design tool. Understanding the "how" behind the connection (NSGs, RDP/SSH, VNETs) allowed me to design a system that doesn't just look better, but actually solves the underlying blockage.</span>
                            </li>
                        </ul>
                    </div>

                    <hr class="border-gray-100" />

                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </span>
                            2. The Power of "Pattern-Aware" Iteration
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            This project was a masterclass in trial-and-error. We executed multiple architectural remakes, moving features in and out of experiments based on telemetry and direct feedback.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Balancing the "Vital Few" and "Useful Many":</strong> Telemetry showed that while 80% of users followed a "happy path," the remaining 20% had highly specialized edge cases (VPNs, custom IPs, etc.). I had to architect a flexible UI that respected common behaviors without abandoning complex needs.</span>
                            </li>
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Evolving via Global Feedback:</strong> I actively incorporated broader usability feedback gathered throughout the Azure ecosystem. <strong>The Learning:</strong> A design is never "finished." By staying humble and willing to pivot based on user insights, we moved from a static experience to a dynamic "Safety Net" that users actually trust.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    // --- PROJECT 2: CAPACITY RECOMMENDER ---
    "capacity-recommender": {
        jumpstart: `
            <div class="space-y-4 animate-fade-in text-left">
                <div class="space-y-2">
                    <div class="flex gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                        <span>2023</span> • <span>Azure Web Portal</span>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-900 leading-tight text-balance">VM Deployment Capacity Recommender</h1>
                </div>

                <p class="text-gray-700"><b>Role:</b> Product Designer</p>
                <p class="text-gray-700"><b>Team:</b> 3 Engineers, 2 Product Managers, 1 Content Designer</p>

                <p class="text-gray-700 leading-relaxed">
                    Capacity constraints in the cloud are often invisible to the user until the very last second. Historically, users only discovered stock-outs after completing a long configuration form.
                </p>

                <div class="pl-4 border-l-2 border-blue-400 py-1">
                    <p class="text-gray-800 leading-relaxed">
                        I developed a resource placement recommender to transform these "hidden walls" into proactive guidance, surfacing alternative regions and sizes at the moment of selection.
                    </p>
                </div>

                <hr class="border-gray-300 w-full" />

                <p class="text-gray-700 leading-relaxed">
                    ⭐ <b>The Impact</b> Capacity failures dropped by 35%, with recommended paths achieving a 97% success deployment rate.
                </p>

                <img src="images/recommender_overview.gif" alt="Capacity Recommender Overview" class="rounded-xl shadow-lg border border-gray-200 w-full" />
            </div>
        `,
        problem: `
            <div class="space-y-6">
                <div>
                    <p class="text-gray-700">Customers frequently chose regions, zones, and VM sizes based on familiarity, unaware of real-time capacity shortages. This led to a "Deployment Cliff"—completing a complex 10-minute form only to hit a <strong>failed allocation</strong> at the final click.</p>
                    
                    <h3 class="text-lg font-bold text-gray-900 mt-6">The Blind Spot</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Late-Stage Failure:</strong> Capacity checks happened at the end of the flow, causing high abandonment.</li>
                        <li><strong>Loss of Confidence:</strong> Repeated retries led customers to believe the platform was unreliable.</li>
                        <li><strong>Information Asymmetry:</strong> The system knew a region was full, but the UI didn't show it.</li>
                    </ul>
                </div>

                <hr class="border-gray-100" />

                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Design Challenge</h3>
                    <p class="text-xl font-semibold text-gray-900 mb-4">
                        "How might we help customers choose a region, zone, and VM size that is most likely to deploy successfully—before they encounter capacity failures?"
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        Success depends on three interrelated factors: <strong>Region, Zone, and SKU size</strong>. We needed to guide customers toward viable combinations without degrading page performance or cluttering an already dense creation canvas.
                    </p>
                </div>
            </div>
        `,
        solutions: `
            <div class="space-y-8">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">1. Proactive Deployability Guidance</h3>
                    <p class="text-gray-700 mb-4">To solve for performance and visibility, I focused on <strong>Intent-Based Timing</strong>. Rather than running heavy logic constantly, we triggered evaluations when users indicated they were finalizing their choices.</p>
                    <div class="flex flex-row gap-3 mb-8 w-full"> 

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col transition-all hover:shadow-md">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Navigation intent</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">
                                We run the API when customers navigate away from the primary config page.
                            </p>
                        </div>

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col transition-all hover:shadow-md">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">High-visibility disclosure</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">
                                Initial designs used modal interrupts to ensure the risk was unmistakable before downstream configuration began.
                            </p>
                        </div>

                    </div>

                    <img src="images/recommender_solution1.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />

                </div>

                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">2. Similarity-Aware Recommendations</h3>
                    <p class="text-gray-700">We didn't just want to provide <em>any</em> suggestion; we needed to preserve <strong>user intent</strong>. I collaborated with backend teams to ensure the API prioritized the "closest matches":</p>
                    <ul class="mt-3 space-y-3 text-gray-700">
                        <li class="flex items-start gap-2">
                            <span class="text-blue-600">•</span>
                            <span><strong class="text-blue-600">Fixed Location:</strong> If the location is non-negotiable, the recommender also provides similar and compatible sizes in the same region and zone.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-blue-500">•</span>
                            <span><strong class="text-blue-600">Fixed Size:</strong> If the VM size was non-negotiable, there are nearby regions or zones with higher capacity to select from.</span>
                        </li>
                    </ul>

                    <img src="images/recommender_solution2.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>

                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">3. Telemetry-Informed Iteration</h3>
                    <p class="text-gray-700">After launch, telemetry showed lower adoption than expected. Our hypothesis: <strong>Mental Commitment.</strong> Users at the end of the flow felt "interruptive modals" were barriers rather than help.</p>
                    <div class="p-4 border-l-4 border-amber-400 bg-amber-50 mt-4">
                        <p class="text-amber-900 font-medium italic">"We replaced the disruptive modal with a contextual warning banner directly after the initial configuration steps. This pivoted the guidance from a 'Stop' sign to a 'Safety Net,' increasing recommendation adoption."</p>
                    </div>
                </div>
                
                <img src="images/recommender_solution3.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
            </div>
        `,
        results: `
            <div class="space-y-6 text-left">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">From Opaque Failures to Guided Success</h3>
                    <p class="text-gray-700">By adjusting the friction of our guidance based on telemetry, we transformed a major platform pain point into a high-confidence deployment path.</p>
                </div>

                <div class="flex flex-row gap-4 w-full">
                    <div class="flex-1 p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-center">
                        <p class="text-3xl font-bold text-blue-600">35% Reduction</p>
                        <p class="text-sm text-gray-600 font-medium mt-1">In allocation failures</p>
                    </div>
                    <div class="flex-1 p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-center">
                        <p class="text-3xl font-bold text-blue-600">97% Success</p>
                        <p class="text-sm text-gray-600 font-medium mt-1">Rate when using recommendations</p>
                    </div>
                </div>

                <p class="text-gray-700 mt-4">
                    ⭐ <b>The Shift:</b> We moved from a "trial and error" deployment model to an intent-aware system that proactively guides users to available infrastructure.
                </p>
            </div>
        `,
        retro: `
            <div class="space-y-8 text-left">
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                            </span>
                            1. Bridging the Gap: Design Meets Code Performance
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            One of my biggest takeaways was learning that "good design" isn't just about the UI—it’s about how that UI behaves under technical constraints. In school, we are taught to design for the "instant" experience, but enterprise-scale APIs often have real-world latency.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Backend API Literacy:</strong> I worked closely with engineering to understand the underlying logic of the recommendation engine. By learning how the API was called and processed, I was able to design loading states and "Shift-Left" interventions that made the performance feel invisible to the user.</span>
                            </li>
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>The Learning:</strong> Performance is a UX attribute. Designing with code performance in mind—like optimizing when and how we surface a "Safety Net" banner—is crucial for maintaining a high-quality, professional experience in complex cloud environments.</span>
                            </li>
                        </ul>
                    </div>

                    <hr class="border-gray-100" />

                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                            </span>
                            2. Data-Driven Pivots: From Stop Sign to Safety Net
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            After launch, telemetry revealed that our initial "interruptive modal" pattern was being dismissed far more often than expected. It became clear that users felt a sense of "mental commitment" at the end of the flow and saw our help as a barrier.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Psychological Timing:</strong> I pivoted the design to a standardized inline banner surfaced earlier in the configuration process. This shifted the perception of the tool from a "Stop" sign (blocking progress) to a "Safety Net" (providing confidence).</span>
                            </li>
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>The Learning:</strong> Even the most helpful recommendation will be ignored if it’s delivered at the wrong moment. Mastering the "timing" of information is just as important as the information itself.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    // --- PROJECT 3: VMSS QUICK CREATE ---
    "vmss-attach": {
        jumpstart: `
            <div class="space-y-4 animate-fade-in text-left">
                <div class="space-y-2">
                    <div class="flex gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                        <span>2025</span> • <span>Azure Web Portal</span>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-900 leading-tight text-balance">VMSS Quick Create for VM Attachment</h1>
                </div>

                <p class="text-gray-700"><b>Role:</b> Product Designer</p>
                <p class="text-gray-700"><b>Team:</b> 1 Engineer, 1 Product Manager</p>

                <p class="text-gray-700 leading-relaxed">
                    Most customers start with a single VM, but eventually need to scale. Historically, moving from a single VM to a Scale Set (VMSS) was an error-prone "manual migration" that led to high abandonment.
                </p>

                <div class="pl-4 border-l-2 border-blue-400 py-1">
                    <p class="text-gray-800 leading-relaxed">
                        I designed a "Quick Create" workflow that auto-generates a fully compatible Scale Set from a source VM, reducing a complex reconfiguration process into a single, two-field form.
                    </p>
                </div>

                <hr class="border-gray-300 w-full" />

                <p class="text-gray-700 leading-relaxed">
                    ⭐ <b>The Impact</b> Attach success rates skyrocketed from 2.2% to 88.1%, significantly reducing the technical barriers for users transitioning from single VMs to scalable infrastructure.
                </p>

                <img src="images/attach_overview.gif" alt="VMSS Quick Create Overview" class="rounded-xl shadow-lg border border-gray-200 w-full" />
            </div>
        `,
        problem: `
            <div class="space-y-6">
                <div>
                    <p class="text-gray-700">The legacy "Attach VM to VMSS" path was a high-friction "side-quest." To scale, users had to manually recreate their entire VM configuration—disk structure, networking, and identity—and <em>guess</em> if it would be compatible with a new Scale Set.</p>
                    
                    <h3 class="text-lg font-bold text-gray-900 mt-6">The High-Friction Wall</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Manual Re-Architecting:</strong> Users had to manually align settings between two different resource types.</li>
                        <li><strong>Deployment Dead-Ends:</strong> Incompatible configurations often caused failures only after 10 minutes of manual work.</li>
                        <li><strong>Low Adoption:</strong> Only ~2% of users successfully navigated the attachment flow.</li>
                    </ul>
                </div>

                <hr class="border-gray-100" />

                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Design Challenge</h3>
                    <p class="text-xl font-semibold text-gray-900 mb-4">
                        "How might we enable customers to successfully scale from an existing VM with minimal effort and risk?"
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        We needed a guided, low-risk path that enabled customers to evolve their workloads without re-architecting. The core insight was that the system already had the data—we just needed to automate the translation from "Single VM" to "Scale Set."
                    </p>
                </div>

                <img src="images/attach_og.gif" alt="Legacy Problem Visualization" class="rounded-xl shadow-lg border border-gray-200 w-full" />
            </div>
        `,
        solutions: `
            <div class="space-y-8">
               <div class="mb-8">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">1. Conditional Disclosure</h3>
                    <p class="text-gray-700">
                        We intentionally surface the "Quick Create" entry point only when it’s relevant—specifically when a user attempts to scale and no compatible VMSS exists. This keeps the UI clean and focuses on <strong>problem-solving in the moment of need.</strong>
                    </p>
                    <p class="text-gray-700 mt-3">
                        For VMs with incompatible configurations—such as disk setups that cannot be carried forward—the system conditionally discloses a **warning and alternative route early on**. By identifying these blockers upfront, we prevent users from mistakenly creating a VMSS that fails to preserve their critical data.
                    </p>

                    <img src="images/attach_solution1.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>

                <div class="mb-8">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">2. Full Configuration Auto-Generation</h3>
                    <p class="text-gray-700 mb-4">To ensure 100% compatibility for attachment, I worked closely with PM and engineering partners to define exactly which VM configurations must be carried forward and how those decisions should be handled automatically.
                    </p>

                    <div class="flex flex-row gap-3 mb-8 w-full"> 
                        
                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Settings Preservation</span>
                            </div>
                            <p class="text-sm  text-gray-700 leading-relaxed">Preserving critical source VM settings including OS image, disk structure, networking, and identity extensions automatically.</p>
                        </div>

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Zonal Readiness</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">Deploying the VMSS to match the source VM’s availability characteristics for smooth future scale-out.</p>
                        </div>

                        <div class="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                    </svg>
                                </div>
                                <span class="font-bold text-blue-600 whitespace-nowrap">Scaling Defaults</span>
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed">Adopting fixed-instance scaling modes by default to ensure success without requiring complex user decisions.</p>
                        </div>
                    </div>

                    <p class="text-gray-700 mb-4">
                        By applying validated defaults, we remove guesswork and re‑creation effort. Customers do not have to manually translate their VM into a VMSS model—the system guarantees 100% compatibility as part of the creation process.
                    </p>

                    <img src="images/attach_solution2.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>

                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">3. The Minimal self-contained Form</h3>
                    <p class="text-gray-700">I reduced a complex, multi-page creation process into a single, self-contained form that only asks for essential inputs:</p>
                    <ul class="mt-3 space-y-3 text-gray-700">
                        <li class="flex items-start gap-2">
                            <span class="text-blue-600">•</span>
                            <span>
                                <strong class="text-blue-600">VMSS Name:</strong> 
                                A default name is pre-filled to accelerate the flow, allowing you to proceed immediately or edit only when a specific naming convention is required.
                            </span>
                        </li>
                        
                        <li class="flex items-start gap-2">
                            <span class="text-blue-600">•</span>
                            <span>
                                <strong class="text-blue-600">Admin Credentials:</strong> 
                                The system dynamically requests the appropriate format—admin name and password for Windows machines, or an SSH public key for Linux environments.
                            </span>
                        </li>
                    </ul>
                    <p class="text-gray-700 mt-4">We maintained a lightweight, approachable flow by <strong>summarizing complex disk and networking settings</strong> into reassuring highlights and <strong>deferring scaling policies</strong> until after deployment, keeping the user's initial focus entirely on a <strong>successful 'win'</strong>.</p>
                    
                    <img src="images/attach_solution3.png" alt="Design Solution Interface" class="rounded-xl shadow-md border border-gray-100 w-full mt-4" />
                </div>
            </div>
        `,
        results: `
            <div class="space-y-6 text-left">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">A Pattern for Scale</h3>
                    <p class="text-gray-700">In A/B testing with 10% of portal traffic, the results validated the "Quick Create" side-quest as a transformative UX model.</p>
                </div>

                <div class="flex flex-row gap-4 w-full">
                    <div class="flex-1 p-5 bg-gray-50 border border-gray-200 rounded-xl flex flex-col justify-center">
                        <p class="text-3xl font-bold text-gray-400">2.2%</p>
                        <p class="text-sm text-gray-500 font-medium mt-1">Control Group Success</p>
                    </div>
                    <div class="flex-1 p-5 bg-white border border-blue-200 rounded-xl shadow-sm flex flex-col justify-center relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase">Treatment</div>
                        <p class="text-3xl font-bold text-blue-600">88.1%</p>
                        <p class="text-sm text-gray-600 font-medium mt-1">Quick-Create Success</p>
                    </div>
                </div>

                <p class="text-gray-700 mt-4">
                    ⭐ <b>Strategic Impact:</b> This experiment validated the pattern as a reusable model. The team is now applying this "side-quest" interaction to other complex flows across the Azure Portal.
                </p>
            </div>
        `,
        retro: `
            <div class="space-y-8 text-left">
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </span>
                            1. Playing the Long Game: Incremental Progress toward Business Goals
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Increasing VMSS adoption is a massive, long-term business objective that can feel daunting due to how legacy resources were originally structured. This project taught me that you don't always need a single "silver bullet" to solve a big problem.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Indirect Wins:</strong> I learned that by starting small—addressing specific pain points like the "Quick Create" entry point—we can build an indirect but steady route toward the larger goal of total adoption. Strategy is often about building a path, one brick at a time.</span>
                            </li>
                        </ul>
                    </div>

                    <hr class="border-gray-100" />

                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="bg-blue-100 text-blue-600 p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 12H13.5" />
                                </svg>
                            </span>
                            2. Balancing Flexibility with Opinionated Defaults
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Azure has historically catered to "Expert" users who want to customize every knob and dial. However, as our customer base expands, so does the need for guided, successful starts.
                        </p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-start gap-3 text-gray-700">
                                <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                <span><strong>Designing for the Spectrum:</strong> I learned that a mature enterprise experience must provide both paths. While we still allow experts to customize, we must instigate "opinionated defaults" for beginners. Prioritizing the initial "win" through automated settings preservation reduces the barrier to entry without sacrificing professional-grade control.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    
    }
};