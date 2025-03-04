const actionButton = `<svg width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.0013 16.584C4.87575 16.584 5.58464 15.8751 5.58464 15.0007C5.58464 14.1262 4.87575 13.4173 4.0013 13.4173C3.12685 13.4173 2.41797 14.1262 2.41797 15.0007C2.41797 15.8751 3.12685 16.584 4.0013 16.584Z" stroke="#2A92AF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.0013 5.50065C4.87575 5.50065 5.58464 4.79177 5.58464 3.91732C5.58464 3.04287 4.87575 2.33398 4.0013 2.33398C3.12685 2.33398 2.41797 3.04287 2.41797 3.91732C2.41797 4.79177 3.12685 5.50065 4.0013 5.50065Z" stroke="#2A92AF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.0013 27.6673C4.87575 27.6673 5.58464 26.9584 5.58464 26.084C5.58464 25.2095 4.87575 24.5006 4.0013 24.5006C3.12685 24.5006 2.41797 25.2095 2.41797 26.084C2.41797 26.9584 3.12685 27.6673 4.0013 27.6673Z" stroke="#2A92AF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


const mockMenu = [{id: 1, name: "Home", icon: "Home", widgetName: "Header", description: "Main landing page"}, {
    id: 2,
    name: "About Us",
    icon: "About Us",
    widgetName: "InfoBox",
    description: "Company information"
}, {
    id: 3,
    name: "Services",
    icon: "Services",
    widgetName: "ServiceList",
    description: "List of services offered"
}, {id: 4, name: "Contact", icon: "Contact", widgetName: "Form", description: "Contact form page"}, {
    id: 5,
    name: "Blog",
    icon: "Blog",
    widgetName: "PostList",
    description: "Latest news and articles"
}, {id: 6, name: "FAQ", icon: "FAQ", widgetName: "Accordion", description: "Frequently asked questions"}, {
    id: 7,
    name: "Careers",
    icon: "Careers",
    widgetName: "JobList",
    description: "Current job openings"
}, {
    id: 8,
    name: "Testimonials",
    icon: "Testimonials",
    widgetName: "Carousel",
    description: "Customer feedback"
}, {
    id: 9,
    name: "Portfolio",
    icon: "Portfolio",
    widgetName: "Gallery",
    description: "Showcase of past projects"
}, {id: 10, name: "Team", icon: "Team", widgetName: "TeamGrid", description: "Meet our team members"}, {
    id: 11,
    name: "Pricing",
    icon: "Pricing",
    widgetName: "PriceTable",
    description: "Available pricing plans"
}, {
    id: 12,
    name: "Terms of Service",
    icon: "Terms of Service",
    widgetName: "TextPage",
    description: "Legal terms and policies"
}, {
    id: 13,
    name: "Privacy Policy",
    icon: "Privacy Policy",
    widgetName: "TextPage",
    description: "Data protection and privacy"
}, {id: 14, name: "Partners", icon: "Partners", widgetName: "LogoGrid", description: "Our trusted partners"}, {
    id: 15,
    name: "Support",
    icon: "Support",
    widgetName: "SupportForm",
    description: "Customer support page"
}, {
    id: 16,
    name: "Events",
    icon: "Events",
    widgetName: "EventList",
    description: "Upcoming events and webinars"
}, {
    id: 17,
    name: "Press",
    icon: "Press",
    widgetName: "NewsFeed",
    description: "Media coverage and press releases"
}, {
    id: 18,
    name: "Case Studies",
    icon: "Case Studies",
    widgetName: "CaseGrid",
    description: "Detailed project studies"
}, {
    id: 19,
    name: "Gallery",
    icon: "Gallery",
    widgetName: "ImageGallery",
    description: "Collection of company photos"
}, {
    id: 20,
    name: "E-books",
    icon: "E-books",
    widgetName: "DownloadList",
    description: "Free resources and e-books"
}, {
    id: 21,
    name: "Webinars",
    icon: "Webinars",
    widgetName: "VideoList",
    description: "On-demand training sessions"
}, {
    id: 22,
    name: "Community",
    icon: "Community",
    widgetName: "Forum",
    description: "User discussions and topics"
}, {
    id: 23,
    name: "Courses",
    icon: "Courses",
    widgetName: "CourseList",
    description: "Educational courses and materials"
}, {
    id: 24,
    name: "API Documentation",
    icon: "API Documentation",
    widgetName: "DocsViewer",
    description: "Technical API guides"
}, {
    id: 25,
    name: "Help Center",
    icon: "Help Center",
    widgetName: "HelpArticles",
    description: "Knowledge base articles"
}, {
    id: 26,
    name: "Dashboard",
    icon: "Dashboard",
    widgetName: "AdminPanel",
    description: "User analytics and metrics"
}, {
    id: 27,
    name: "Reports",
    icon: "Reports",
    widgetName: "ReportList",
    description: "Data insights and reports"
}, {
    id: 28,
    name: "Resources",
    icon: "Resources",
    widgetName: "ResourceList",
    description: "Guides and useful materials"
}, {
    id: 29,
    name: "Security",
    icon: "Security",
    widgetName: "SecurityInfo",
    description: "Security policies and best practices"
}, {id: 30, name: "Login", icon: "Login", widgetName: "AuthForm", description: "User authentication page"}, {
    id: 31,
    name: "Sign Up",
    icon: "Sign Up",
    widgetName: "AuthForm",
    description: "Create a new account"
}, {
    id: 32,
    name: "User Profile",
    icon: "User Profile",
    widgetName: "ProfilePage",
    description: "User account settings"
}, {
    id: 33,
    name: "Notifications",
    icon: "Notifications",
    widgetName: "NotificationList",
    description: "User alerts and messages"
}, {
    id: 34,
    name: "Saved Items",
    icon: "Saved Items",
    widgetName: "FavoritesList",
    description: "User saved content"
}, {
    id: 35,
    name: "Activity Log",
    icon: "Activity Log",
    widgetName: "ActivityFeed",
    description: "Recent user activity"
}, {
    id: 36,
    name: "Store",
    icon: "Store",
    widgetName: "ProductList",
    description: "E-commerce product catalog"
}, {id: 37, name: "Cart", icon: "Cart", widgetName: "CartView", description: "Shopping cart and checkout"}, {
    id: 38,
    name: "Wishlist",
    icon: "Wishlist",
    widgetName: "WishlistView",
    description: "Saved products for later"
}, {
    id: 39,
    name: "Orders",
    icon: "Orders",
    widgetName: "OrderHistory",
    description: "Purchase history and details"
}, {
    id: 40,
    name: "Downloads",
    icon: "Downloads",
    widgetName: "DownloadCenter",
    description: "Digital product downloads"
}, {
    id: 41,
    name: "Billing",
    icon: "Billing",
    widgetName: "BillingDetails",
    description: "Payment and invoice details"
}, {
    id: 42,
    name: "Integrations",
    icon: "Integrations",
    widgetName: "IntegrationList",
    description: "Third-party app connections"
}, {
    id: 43,
    name: "Legal",
    icon: "Legal",
    widgetName: "LegalDocs",
    description: "Terms, policies, and agreements"
}, {
    id: 44,
    name: "Sitemap",
    icon: "Sitemap",
    widgetName: "SiteMap",
    description: "Website structure overview"
}, {
    id: 45,
    name: "Maintenance",
    icon: "Maintenance",
    widgetName: "MaintenanceMode",
    description: "Temporary downtime notice"
}, {
    id: 46,
    name: "Changelog",
    icon: "Changelog",
    widgetName: "UpdateLog",
    description: "Recent updates and fixes"
}, {
    id: 47,
    name: "Beta Features",
    icon: "Beta Features",
    widgetName: "BetaAccess",
    description: "Experimental new features"
}, {
    id: 48,
    name: "Affiliates",
    icon: "Affiliates",
    widgetName: "AffiliateProgram",
    description: "Referral program information"
}, {id: 49, name: "Survey", icon: "Survey", widgetName: "SurveyForm", description: "User feedback collection"}, {
    id: 50,
    name: "Announcements",
    icon: "Announcements",
    widgetName: "AnnouncementFeed",
    description: "Latest company updates"
}];
const mockPages = [
    {id: 1, name: "Home", widgetName: "Header", description: "Main landing page"},
    {id: 2, name: "About Us", widgetName: "InfoBox", description: "Company information"},
    {id: 3, name: "Services", widgetName: "ServiceList", description: "List of services offered"},
    {id: 4, name: "Contact", widgetName: "Form", description: "Contact form page"},
    {id: 5, name: "Blog", widgetName: "PostList", description: "Latest news and articles"},
    {id: 6, name: "FAQ", widgetName: "Accordion", description: "Frequently asked questions"},
    {id: 7, name: "Careers", widgetName: "JobList", description: "Current job openings"},
    {id: 8, name: "Testimonials", widgetName: "Carousel", description: "Customer feedback"},
    {id: 9, name: "Portfolio", widgetName: "Gallery", description: "Showcase of past projects"},
    {id: 10, name: "Team", widgetName: "TeamGrid", description: "Meet our team members"},
    {id: 11, name: "Pricing", widgetName: "PriceTable", description: "Available pricing plans"},
    {id: 12, name: "Terms of Service", widgetName: "TextPage", description: "Legal terms and policies"},
    {id: 13, name: "Privacy Policy", widgetName: "TextPage", description: "Data protection and privacy"},
    {id: 14, name: "Partners", widgetName: "LogoGrid", description: "Our trusted partners"},
    {id: 15, name: "Support", widgetName: "SupportForm", description: "Customer support page"},
    {id: 16, name: "Events", widgetName: "EventList", description: "Upcoming events and webinars"},
    {id: 17, name: "Press", widgetName: "NewsFeed", description: "Media coverage and press releases"},
    {id: 18, name: "Case Studies", widgetName: "CaseGrid", description: "Detailed project studies"},
    {id: 19, name: "Gallery", widgetName: "ImageGallery", description: "Collection of company photos"},
    {id: 20, name: "E-books", widgetName: "DownloadList", description: "Free resources and e-books"},
    {id: 21, name: "Webinars", widgetName: "VideoList", description: "On-demand training sessions"},
    {id: 22, name: "Community", widgetName: "Forum", description: "User discussions and topics"},
    {id: 23, name: "Courses", widgetName: "CourseList", description: "Educational courses and materials"},
    {id: 24, name: "API Documentation", widgetName: "DocsViewer", description: "Technical API guides"},
    {id: 25, name: "Help Center", widgetName: "HelpArticles", description: "Knowledge base articles"},
    {id: 26, name: "Dashboard", widgetName: "AdminPanel", description: "User analytics and metrics"},
    {id: 27, name: "Reports", widgetName: "ReportList", description: "Data insights and reports"},
    {id: 28, name: "Resources", widgetName: "ResourceList", description: "Guides and useful materials"},
    {id: 29, name: "Security", widgetName: "SecurityInfo", description: "Security policies and best practices"},
    {id: 30, name: "Login", widgetName: "AuthForm", description: "User authentication page"},
    {id: 31, name: "Sign Up", widgetName: "AuthForm", description: "Create a new account"},
    {id: 32, name: "User Profile", widgetName: "ProfilePage", description: "User account settings"},
    {id: 33, name: "Notifications", widgetName: "NotificationList", description: "User alerts and messages"},
    {id: 34, name: "Saved Items", widgetName: "FavoritesList", description: "User saved content"},
    {id: 35, name: "Activity Log", widgetName: "ActivityFeed", description: "Recent user activity"},
    {id: 36, name: "Store", widgetName: "ProductList", description: "E-commerce product catalog"},
    {id: 37, name: "Cart", widgetName: "CartView", description: "Shopping cart and checkout"},
    {id: 38, name: "Wishlist", widgetName: "WishlistView", description: "Saved products for later"},
    {id: 39, name: "Orders", widgetName: "OrderHistory", description: "Purchase history and details"},
    {id: 40, name: "Downloads", widgetName: "DownloadCenter", description: "Digital product downloads"},
    {id: 41, name: "Billing", widgetName: "BillingDetails", description: "Payment and invoice details"},
    {id: 42, name: "Integrations", widgetName: "IntegrationList", description: "Third-party app connections"},
    {id: 43, name: "Legal", widgetName: "LegalDocs", description: "Terms, policies, and agreements"},
    {id: 44, name: "Sitemap", widgetName: "SiteMap", description: "Website structure overview"},
    {id: 45, name: "Maintenance", widgetName: "MaintenanceMode", description: "Temporary downtime notice"},
    {id: 46, name: "Changelog", widgetName: "UpdateLog", description: "Recent updates and fixes"},
    {id: 47, name: "Beta Features", widgetName: "BetaAccess", description: "Experimental new features"},
    {id: 48, name: "Affiliates", widgetName: "AffiliateProgram", description: "Referral program information"},
    {id: 49, name: "Survey", widgetName: "SurveyForm", description: "User feedback collection"},
    {id: 50, name: "Announcements", widgetName: "AnnouncementFeed", description: "Latest company updates"}
];

const getPageRows = async function () {
    return mockPages;
}
const getMenuRows = async function () {
    const randomNumber = Math.floor(Math.random() * mockMenu.length/5);
    return mockMenu.slice(0,randomNumber);
}

const getDropDownMenu= function(id){
    return `<div class="action-dropdown" id="dropdown-${id}">
            <a href="#" class="dropdown-item" data-local-action="openEditModal ${id}">
              <svg>...</svg>
              Edit
            </a>
            <a href="#" class="dropdown-item" data-local-action="deletePage ${id}">
              <svg>...</svg>
              Delete
            </a>
          </div>
`
}
export class ApplicationCreatorMenu {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.pageName = "Menu"
        this.invalidate();
    }

    async beforeRender() {
        if (!this.currentPage) {
            this.currentPage = mockPages[0].name;
        }
        this.pages = (await getPageRows()).map(pageData => {
            return `<option value="${pageData.name}" ${this.currentPage===pageData.name?"selected":""} >${pageData.name}</option>`
        }).join('');
        this.menuRows = (await getMenuRows(this.currentPage)).map(menuData => {
            return `<tr>
            <td>${menuData.icon}</td>
            <td>${menuData.name}</td>
            <td>${menuData.widgetName}</td>
            <td class="application-action-button" data-local-action="viewActions ${menuData.id}" ">
          ${actionButton}
         ${getDropDownMenu(menuData.id)}
        </td>
            </tr>`
        }).join('');
    }

    async afterRender() {
        this.element.querySelector("#selectedPage").addEventListener('change', (event) => {
            this.currentPage = event.target.value;
            this.invalidate();
        });
    }
    async viewActions(eventTarget,id){
        document.querySelectorAll('.action-dropdown').forEach(d => d.classList.remove('show'));

        const dropdown = eventTarget.querySelector('.action-dropdown');
        dropdown.classList.toggle('show');

        const clickHandler = (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('show');
                document.removeEventListener('click', clickHandler);
            }
        };

        document.addEventListener('click', clickHandler);
    }
}