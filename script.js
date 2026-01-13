// Experience data organized by year
const experienceData = {
    2025: [
        {
            title: '蝦皮UIUX Intern',
            items: []
        },
        {
            title: '捷德運動股份有限公司苦命設計師',
            items: []
        },
        {
            title: 'DFT創變對決',
            items: []
        },
        {
            title: 'OpenHCI工作坊視覺部',
            items: []
        },
        {
            title: '育秀杯',
            items: []
        },
        {
            title: '全國專題論文競賽',
            items: []
        }
    ],
    2024: [
        {
            title: '台科大設計週展出',
            items: []
        },
        {
            title: '電通永續之森工作坊',
            items: []
        },
        {
            title: 'KDM台韓交流工作坊',
            items: []
        }
    ],
    2023: [
        {
            title: '台科大設計周展出',
            items: []
        },
        {
            title: '瑞穗天合飯店X高雄餐旅大學服務設計合作',
            items: []
        },
        {
            title: '宿舍幹部',
            items: []
        },
        {
            title: '校長室工讀/接案',
            items: []
        }
    ],
    2022: [
        {
            title: '宿舍幹部',
            items: []
        }
    ],
    2021: [
        {
            title: '台灣科技大學 工業設計系',
            items: []
        },
        {
            title: '台灣科技大學 智慧財產學程',
            items: []
        },
        {
            title: '排球系隊',
            items: []
        }
    ]
};

// Future data
const futureData = {
    long: {
        title: 'Long Term',
        items: [
            '有2個實際落地專案',
            '畢業薪水5W+'
        ]
    },
    mid: {
        title: 'Mid Term',
        items: [
            '能將設計轉換為商業指標並具有技術可行性',
            '能從過程中獲得成就感並認同專案'
        ]
    },
    short: {
        title: 'Short Term',
        goals: [
            {
                goal: '3年畢業',
                skills: '批判式思考、研究執行能力',
                steps: [
                    '論文大量閱讀',
                    '尋找感興趣的論文主題',
                    '擬定三個研究方向並深入研究',
                    '參與計劃案'
                ]
            },
            {
                goal: '累積一年業界經驗',
                skills: '專案管理與跨域協作、設計與技術理解能力、商業實務能力',
                steps: [
                    {
                        main: '完成實習',
                        sub: [
                            '大企業的專案管理方式',
                            '規格化的PRD撰寫方式',
                            '以設計身分與工程師團隊在專案上抓取平衡點',
                            '了解開發實務上技術應用'
                        ]
                    },
                    {
                        main: '建立自由接案制度',
                        sub: [
                            '如何管理個人專案(建立收費方式/專案進度追蹤表)',
                            '與客戶溝通的技巧',
                            '了解自己專案價值'
                        ]
                    }
                ]
            },
            {
                goal: '半年擁有可應用的vibe coding能力',
                skills: '熟悉vibe coding與應用(html, CSS, JavaScript, Python, Github…)',
                steps: [
                    '不求精通但要看懂，跟著Ric教學',
                    '能夠自行修改程式碼並debug',
                    '定義一個自己會應用or會被他人應用的產品內容並實作'
                ]
            }
        ]
    }
};

// Initialize the timeline
function initTimeline() {
    const timelineYears = document.getElementById('timelineYears');
    const experiencePopup = document.getElementById('experiencePopup');
    const experienceSection = document.querySelector('.experience-section');
    
    // Get all unique years and sort them
    const years = Object.keys(experienceData).sort((a, b) => b - a);
    
    // Create year buttons
    years.forEach((year) => {
        const yearItem = document.createElement('div');
        yearItem.className = 'year-item';
        yearItem.textContent = year;
        yearItem.dataset.year = year;
        
        // Click event for popup
        yearItem.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPopup = document.getElementById('experiencePopup');
            const isCurrentlyShowing = currentPopup.classList.contains('show');
            
            // Toggle popup - close if already showing, open if not
            if (isCurrentlyShowing && currentPopup.dataset.currentYear === year) {
                hideExperiencePopup();
            } else {
                showExperiencePopup(year, yearItem);
            }
        });
        
        timelineYears.appendChild(yearItem);
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const experiencePopup = document.getElementById('experiencePopup');
        if (experiencePopup.classList.contains('show') && 
            !experiencePopup.contains(e.target) &&
            !e.target.closest('.year-item')) {
            hideExperiencePopup();
        }
    });
}

// Show experience popup
function showExperiencePopup(year, yearElement) {
    const experiencePopup = document.getElementById('experiencePopup');
    const experiences = experienceData[year] || [];
    
    // Clear previous content
    experiencePopup.innerHTML = '';
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideExperiencePopup();
    });
    
    if (experiences.length === 0) {
        experiencePopup.innerHTML = '<p>此年份無相關經驗</p>';
        experiencePopup.appendChild(closeBtn);
        experiencePopup.dataset.currentYear = year;
        experiencePopup.classList.add('show');
        return;
    }
    
    // Create experience content
    experiences.forEach(exp => {
        let html = `<h3>${exp.title}</h3>`;
        if (exp.period) {
            html += `<div class="period">${exp.period}</div>`;
        }
        
        if (exp.items && exp.items.length > 0) {
            html += '<ul>';
            exp.items.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        }
        
        const card = document.createElement('div');
        card.className = 'popup-content';
        card.innerHTML = html;
        experiencePopup.appendChild(card);
    });
    
    experiencePopup.appendChild(closeBtn);
    experiencePopup.dataset.currentYear = year;
    
    // Check if mobile device (768px and below)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // On mobile, use fixed positioning centered on screen
        experiencePopup.style.position = 'fixed';
        experiencePopup.style.left = '50%';
        experiencePopup.style.top = '50%';
        experiencePopup.style.transform = 'translate(-50%, -50%)';
        experiencePopup.style.marginTop = '0';
        experiencePopup.style.marginBottom = '0';
    } else {
        // On desktop, position relative to year element
        const rect = yearElement.getBoundingClientRect();
        const sectionRect = document.querySelector('.experience-section').getBoundingClientRect();
        let leftPosition = rect.left - sectionRect.left;
        
        // Temporarily show popup to get its dimensions (with opacity 0 to avoid flash)
        experiencePopup.style.opacity = '0';
        experiencePopup.style.visibility = 'visible';
        experiencePopup.style.left = `${leftPosition}px`;
        
        // Calculate popup dimensions
        const popupWidth = experiencePopup.offsetWidth;
        const popupHeight = experiencePopup.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const padding = 20; // Padding from viewport edges
        
        // Check right boundary (rect.left is relative to viewport)
        const popupRight = rect.left + popupWidth;
        if (popupRight > viewportWidth - padding) {
            leftPosition = viewportWidth - popupWidth - padding - sectionRect.left;
        }
        
        // Check left boundary
        if (leftPosition < padding) {
            leftPosition = padding;
        }
        
        // Check bottom boundary
        const popupBottom = rect.bottom + popupHeight + 20; // 20px margin-top
        if (popupBottom > viewportHeight - padding) {
            // Position popup above the element instead
            experiencePopup.style.top = 'auto';
            experiencePopup.style.bottom = '100%';
            experiencePopup.style.marginTop = '0';
            experiencePopup.style.marginBottom = '20px';
        } else {
            experiencePopup.style.top = '100%';
            experiencePopup.style.bottom = 'auto';
            experiencePopup.style.marginTop = '20px';
            experiencePopup.style.marginBottom = '0';
        }
        
        // Set final position
        experiencePopup.style.left = `${leftPosition}px`;
    }
    
    // Show popup
    experiencePopup.style.opacity = '';
    experiencePopup.style.visibility = '';
    experiencePopup.classList.add('show');
    
    // Show overlay on mobile
    if (isMobile) {
        const overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.classList.add('show');
        }
    }
}

// Hide experience popup
function hideExperiencePopup() {
    const experiencePopup = document.getElementById('experiencePopup');
    const overlay = document.getElementById('popupOverlay');
    experiencePopup.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
    // Reset positioning
    experiencePopup.style.position = '';
    experiencePopup.style.left = '';
    experiencePopup.style.top = '';
    experiencePopup.style.transform = '';
}

// Initialize Future section
function initFuture() {
    const futureItems = document.querySelectorAll('.future-item');
    const futurePopup = document.getElementById('futurePopup');
    
    futureItems.forEach(item => {
        const term = item.dataset.term;
        
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPopup = document.getElementById('futurePopup');
            const isCurrentlyShowing = currentPopup.classList.contains('show');
            
            // Toggle popup - close if already showing, open if not
            if (isCurrentlyShowing && currentPopup.dataset.currentTerm === term) {
                hideFuturePopup();
            } else {
                showFuturePopup(term, item);
            }
        });
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const futurePopup = document.getElementById('futurePopup');
        if (futurePopup.classList.contains('show') && 
            !futurePopup.contains(e.target) &&
            !e.target.closest('.future-item')) {
            hideFuturePopup();
        }
    });
}

// Show future popup
function showFuturePopup(term, termElement) {
    const futurePopup = document.getElementById('futurePopup');
    const data = futureData[term];
    
    if (!data) return;
    
    let html = `<h2>${data.title}</h2>`;
    
    if (data.items) {
        // Long Term or Mid Term
        html += '<ul>';
        data.items.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    } else if (data.goals) {
        // Short Term
        data.goals.forEach(goalData => {
            html += `<div class="plan-goal">`;
            html += `<h3>目標：${goalData.goal}</h3>`;
            html += `<p><strong>培養技能：</strong>${goalData.skills}</p>`;
            html += `<p><strong>操作步驟：</strong></p>`;
            html += '<ul>';
            
            goalData.steps.forEach(step => {
                if (typeof step === 'string') {
                    html += `<li>${step}</li>`;
                } else if (step.main) {
                    // Nested structure
                    html += `<li>${step.main}`;
                    if (step.sub && step.sub.length > 0) {
                        html += '<ul>';
                        step.sub.forEach(subStep => {
                            html += `<li>${subStep}</li>`;
                        });
                        html += '</ul>';
                    }
                    html += '</li>';
                }
            });
            
            html += '</ul>';
            html += '</div>';
        });
    }
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideFuturePopup();
    });
    
    futurePopup.innerHTML = html;
    futurePopup.appendChild(closeBtn);
    futurePopup.dataset.currentTerm = term;
    
    // Check if mobile device (768px and below)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // On mobile, use fixed positioning centered on screen
        futurePopup.style.position = 'fixed';
        futurePopup.style.left = '50%';
        futurePopup.style.top = '50%';
        futurePopup.style.transform = 'translate(-50%, -50%)';
        futurePopup.style.marginTop = '0';
        futurePopup.style.marginBottom = '0';
    } else {
        // On desktop, position relative to term element
        const rect = termElement.getBoundingClientRect();
        const sectionRect = document.querySelector('.future-section').getBoundingClientRect();
        let leftPosition = rect.left - sectionRect.left;
        
        // Temporarily show popup to get its dimensions (with opacity 0 to avoid flash)
        futurePopup.style.opacity = '0';
        futurePopup.style.visibility = 'visible';
        futurePopup.style.left = `${leftPosition}px`;
        
        // Calculate popup dimensions
        const popupWidth = futurePopup.offsetWidth;
        const popupHeight = futurePopup.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const padding = 20; // Padding from viewport edges
        
        // Check right boundary (rect.left is relative to viewport)
        const popupRight = rect.left + popupWidth;
        if (popupRight > viewportWidth - padding) {
            leftPosition = viewportWidth - popupWidth - padding - sectionRect.left;
        }
        
        // Check left boundary
        if (leftPosition < padding) {
            leftPosition = padding;
        }
        
        // Check bottom boundary
        const popupBottom = rect.bottom + popupHeight + 20; // 20px margin-top
        if (popupBottom > viewportHeight - padding) {
            // Position popup above the element instead
            futurePopup.style.top = 'auto';
            futurePopup.style.bottom = '100%';
            futurePopup.style.marginTop = '0';
            futurePopup.style.marginBottom = '20px';
        } else {
            futurePopup.style.top = '100%';
            futurePopup.style.bottom = 'auto';
            futurePopup.style.marginTop = '20px';
            futurePopup.style.marginBottom = '0';
        }
        
        // Set final position
        futurePopup.style.left = `${leftPosition}px`;
    }
    
    // Show popup
    futurePopup.style.opacity = '';
    futurePopup.style.visibility = '';
    futurePopup.classList.add('show');
    
    // Show overlay on mobile
    if (isMobile) {
        const overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.classList.add('show');
        }
    }
}

// Hide future popup
function hideFuturePopup() {
    const futurePopup = document.getElementById('futurePopup');
    const overlay = document.getElementById('popupOverlay');
    futurePopup.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
    // Reset positioning
    futurePopup.style.position = '';
    futurePopup.style.left = '';
    futurePopup.style.top = '';
    futurePopup.style.transform = '';
}

// Initialize overlay click handler
function initOverlay() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            hideExperiencePopup();
            hideFuturePopup();
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    initFuture();
    initOverlay();
});
