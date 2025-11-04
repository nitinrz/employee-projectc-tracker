const employees = [ 
  {
    id: 1,
    name: "Amit",
    email: "employee1@company.com",
    password: "123",
    taskSummary: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Summarize weekly sales and performance data.",
        taskDate: "2025-11-01",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Follow-up",
        taskDescription: "Call and follow up with clients for pending invoices.",
        taskDate: "2025-11-02",
        category: "Client Relations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Database Cleanup",
        taskDescription: "Remove outdated entries from the CRM database.",
        taskDate: "2025-11-03",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Riya",
    email: "employee2@company.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create a new design for the product landing page.",
        taskDate: "2025-11-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the Monday team strategy meeting.",
        taskDate: "2025-11-03",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Branding Guide",
        taskDescription: "Revise company color palette and typography standards.",
        taskDate: "2025-11-06",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Mobile UI Bugs",
        taskDescription: "Resolve layout issues on the mobile homepage.",
        taskDate: "2025-11-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Arun",
    email: "employee3@company.com",
    password: "123",
    taskSummary: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Audit warehouse stock and update system records.",
        taskDate: "2025-11-02",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Supplier Meeting",
        taskDescription: "Discuss shipment delays with main supplier.",
        taskDate: "2025-11-05",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Procurement Policy",
        taskDescription: "Revise purchasing guidelines for Q4.",
        taskDate: "2025-11-08",
        category: "Policy",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Neha",
    email: "employee4@company.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Server Backup",
        taskDescription: "Perform weekly data backup on all servers.",
        taskDate: "2025-11-01",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "System Monitoring",
        taskDescription: "Ensure all critical systems are running smoothly.",
        taskDate: "2025-11-02",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Security Patch Update",
        taskDescription: "Apply latest security patches to backend servers.",
        taskDate: "2025-11-06",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "API Performance Optimization",
        taskDescription: "Enhance API response time and reduce server load.",
        taskDate: "2025-11-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Vijay",
    email: "employee5@company.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 2 },
    tasks: [
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Plan and execute November marketing campaign.",
        taskDate: "2025-11-01",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Email Newsletter",
        taskDescription: "Write and schedule weekly newsletter.",
        taskDate: "2025-11-02",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Ad Performance Analysis",
        taskDescription: "Analyze click-through rates for social ads.",
        taskDate: "2025-11-03",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Influencer Outreach",
        taskDescription: "Contact influencers for product promotions.",
        taskDate: "2025-11-07",
        category: "PR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Website SEO Audit",
        taskDescription: "Run site-wide SEO performance audit.",
        taskDate: "2025-11-09",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    
    id: 1,
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =() =>{
         const employees = JSON.parse(localStorage.getItem('employees'))
         const admin = JSON.parse(localStorage.getItem('admin'))
        //  console.log(employees,admin);
         
         return {employees,admin}
}