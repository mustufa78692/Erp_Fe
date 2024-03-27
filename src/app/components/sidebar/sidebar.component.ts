import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, flatMap, of } from "rxjs";
import { ServicesService } from "src/app/services/services.service";

declare interface RouteInfo {
  id: number;
  isModuleOpen: boolean;
  path: string;
  title: string;
  icon: string;
  color: string;
  class: string;
  child: any[];
}


export let AdminRoutes: RouteInfo[] = [
  {
    id: 1,
    isModuleOpen: false,
    path: "/dashboard",
    title: "Dashboard",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 2,
    isModuleOpen: false,
    path: "/human-resources-management/new-employee",
    title: "Human Resources Management",
    icon: "fa-solid fa-people-group",
    color: "#3883B8",
    class: "",
    child: [
      { name: "Onboarding", path: "/human-resources-management/new-employee" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      // { name: "Attendance Management", path: "" },
      // { name: "Performance Management", path: "" },
      // { name: "Payroll Processing", path: "" },
      // { name: "Leave Management", path: "" },
    ],
  },
  {
    id: 3,
    isModuleOpen: false,
    path: "/warehouse-management",
    title: "Warehouse Management",
    icon: "fa-solid fa-warehouse",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 4,
    isModuleOpen: false,
    path: "/inventory-management",
    title: "Inventory Management",
    icon: "fa-solid fa-people-carry-box",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 5,
    isModuleOpen: false,
    path: "/order-management",
    title: "Order Management",
    icon: "fa-solid fa-hand-holding-heart",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 6,
    isModuleOpen: false,
    path: "/supply-chain-management",
    title: "Supply Chain Management",
    icon: "fa-solid fa-truck",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 7,
    isModuleOpen: false,
    path: "/all-employees",
    title: "All Employees",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 8,
    isModuleOpen: false,
    path: "/Academic-calender",
    title: "Academic Calender",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [
      
      { name: " Staff Leave Monitoring ", path: "/Academic-calender/staff-leave-monitoring" },
      { name: " Academic Calender ", path: "/Academic-calender/get-academic-calendar" },
      { name: " Employee Attendance By Date ", path: "/Academic-calender/get-emp-attendance-by-year" },
      { name: " Employee Attendance By Month ", path: "/Academic-calender/get-emp-attendance-by-month" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      { name: "Leave Calender", path: "/Academic-calender/leave-calendar" },
      { name: " Employee Leave By Month", path: "/Academic-calender/search-employee-leave-bymonth" },
      { name: "Employee Leave By Year", path: "/Academic-calender/search-employee-leave-year" },
      { name: "Employees Leave By Date", path: "/Academic-calender/search-employees-leave-bydate" },
      { name: "Yearly Holidays", path: "/Academic-calender/yearly-holidays" },
      // { name: "Payroll Processing", path: "" },
      // { name: "Leave Management", path: "" },
    ],

  },
 
  {
    id: 9,
    isModuleOpen: false,
    path: "/forms",
    title: "Forms",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [
      { name: "Add Location", path: "/forms/add-location" },
      { name: "Add Level ", path: "/forms/level-type" },
      { name: "Add Designation", path: "/forms/add-designation" },
      { name: "Add Duties", path: "/forms/add-duties" },
      { name: "Add Sub Duties", path: "/forms/add-sub-duties" },
      { name: "Add Tasks", path: "/forms/add-tasks" },
      { name: "Add Academic ", path: "/forms/add-academic-calendar" },
      { name: "Leave Type ", path: "/forms/type-of-leave" },
      { name: "Add Department ", path: "/forms/add-department" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      { name: "Add Additional Task", path: "/forms/add-additional-task" },
      { name: "Add Leave Approver", path: "/forms/add-leave-approver" },
      { name: "Add Shift ", path: "/forms/add-shift"   },
      { name: "Shift Assign", path: "/forms/shift-assign" },
      // { name: "Shift Assign", path: "/forms/all-employee-shift" },
    ],

  },
  
  {
    id: 10,
    isModuleOpen: false,
    path: "/setting",
    title: "Settings",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 11,
    isModuleOpen: false,
    path: "/admin-leaves",
    title: "Leave",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [
      { title: "approved-by-first", name: "First Leave Approver ", path: "/admin-leaves/approved-by-first" },
      { name: "Second Leave Approver ", path: "/admin-leaves/approved-by-second" },
      

    ],
  },
  {
    id: 12,
    isModuleOpen: false,
    path: "/all-notifications",
    title: "All Notification",
    icon: "ni-single-02 text-green",
    color: "#3883B8",
    class: "",
    child: [],
  },
];
export let HrRoutes: RouteInfo[] = [
  {
    id: 1,
    isModuleOpen: false,
    path: "/dashboard",
    title: "Dashboard",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 2,
    isModuleOpen: false,
    path: "/human-resources-management",
    title: "Human Resources Management",
    icon: "fa-solid fa-people-group",
    color: "#3883B8",
    class: "",
    child: [
      { name: "Onboarding", path: "/human-resources-management/new-employee" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      { name: "Attendance Management", path: "" },
      { name: "Performance Management", path: "" },
      { name: "Payroll Processing", path: "" },
      { name: "Leave Management", path: "" },
    ],
  },
  // {
  //   id: 3,
  //   isModuleOpen: false,
  //   path: "/warehouse-management",
  //   title: "Warehouse Management",
  //   icon: "fa-solid fa-warehouse",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
  //     { name: "module-1", path: "" },
  //     { name: "module-2", path: "" },
  //     { name: "module-3", path: "" },
  //     { name: "module-4", path: "" },
  //     { name: "module-5", path: "" },
  //   ],
  // },
  // {
  //   id: 4,
  //   isModuleOpen: false,
  //   path: "/inventory-management",
  //   title: "Inventory Management",
  //   icon: "fa-solid fa-people-carry-box",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
  //     { name: "module-1", path: "" },
  //     { name: "module-2", path: "" },
  //     { name: "module-3", path: "" },
  //     { name: "module-4", path: "" },
  //     { name: "module-5", path: "" },
  //   ],
  // },
  // {
  //   id: 5,
  //   isModuleOpen: false,
  //   path: "/order-management",
  //   title: "Order Management",
  //   icon: "fa-solid fa-hand-holding-heart",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
  //     { name: "module-1", path: "" },
  //     { name: "module-2", path: "" },
  //     { name: "module-3", path: "" },
  //     { name: "module-4", path: "" },
  //     { name: "module-5", path: "" },
  //   ],
  // },
  // {
  //   id: 6,
  //   isModuleOpen: false,
  //   path: "/supply-chain-management",
  //   title: "Supply Chain Management",
  //   icon: "fa-solid fa-truck",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
  //     { name: "module-1", path: "" },
  //     { name: "module-2", path: "" },
  //     { name: "module-3", path: "" },
  //     { name: "module-4", path: "" },
  //     { name: "module-5", path: "" },
  //   ],
  // },
  {
    id: 3,
    isModuleOpen: false,
    path: "/all-employees",
    title: "All Employees",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 4,
    isModuleOpen: false,
    path: "/Academic-calender",
    title: "Academic Calender",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [
      // { name: "Add Academic ", path: "/Academic-calender/add-academic-calendar" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      { name: "Leave Calender", path: "/Academic-calender/leave-calendar" },
      { name: " Employee Leave By Month", path: "/Academic-calender/search-employee-leave-bymonth" },
      { name: "Employee Leave By Year", path: "/Academic-calender/search-employee-leave-year" },
      { name: "Employees Leave By Date", path: "/Academic-calender/search-employees-leave-bydate" },
      { name: "Payroll Processing", path: "" },
      { name: "Leave Management", path: "" },
    ],

  },
 
  // {
  //   id: 9,
  //   isModuleOpen: false,
  //   path: "/forms",
  //   title: "Forms",
  //   icon: "ni-key-25 text-info",
  //   color: "#3883B8",
  //   class: "",
  //   child:[]
  // },
  // {
  //   id: 9,
  //   isModuleOpen: false,
  //   path: "/forms",
  //   title: "Forms",
  //   icon: "ni-key-25 text-info",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
  //     { name: "Leave Type ", path: "/forms/type-of-leave" },
  //     { name: "Add Department ", path: "/forms/add-department" },
  //     // { name: "Onboarding", path: "/human-resources-management/new-employee" },
  //     { name: "Level Type", path: "/forms/level-type" },
  //     { name: "Add Designation", path: "/forms/add-designation" },
  //     { name: "Add Duties", path: "/forms/add-duties" },
  //     { name: "Add Sub Duties", path: "/forms/add-sub-duties" },
  //     { name: "Add Tasks", path: "/forms/add-tasks" },
  //     { name: "Add Additional Task", path: "/forms/add-additional-task" },
  //     { name: "Add Location", path: "/forms/add-location" },
  //     { name: "Add Leave Approver", path: "/forms/add-leave-approver" },
  //   ],

  // },
  
  // {
  //   id: 10,
  //   isModuleOpen: false,
  //   path: "/setting",
  //   title: "Settings",
  //   icon: "ni-key-25 text-info",
  //   color: "#3883B8",
  //   class: "",
  //   child: [],
  // },
  // {
  //   id: 11,
  //   isModuleOpen: false,
  //   path: "/admin-profile",
  //   title: "Admin profile",
  //   icon: "ni-single-02 text-yellow",
  //   color: "#3883B8",
  //   class: "",
  //   child: [
      

  //   ],
  // },
  {
    id: 5,
    isModuleOpen: false,
    path: "/all-notifications",
    title: "All Leave ",
    icon: "ni-single-02 text-green",
    color: "#3883B8",
    class: "",
    child: [],
  },
];
// export let HrRoutes: RouteInfo[] 
// export let ManagerRoutes: RouteInfo[]
// export let EmployeeRoutes: RouteInfo[]




export let ROUTES: RouteInfo[];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
// export class SidebarComponent implements OnInit {
//   public menuItems: any[];
//   public isCollapsed = true;
//   public isModule: boolean = false;

//   constructor(private router: Router, public _authService: ServicesService) {}

  
//   ngOnInit() {
//     this.setMenuItems();
//   }
  
//   setMenuItems() {
//     let userRole ="ROLE_ADMIN" ;
//     // let userRole = this._authService.getRole();
  
//     if (userRole === "ROLE_ADMIN") {
//       ROUTES = AdminRoutes;
//     } else if (userRole === "ROLE_EMPLOYEE") {
//       ROUTES = EmployeeRoutes;
//     } else if (userRole === "ROLE_HR") {
//       ROUTES = HrRoutes;
//     } else if (userRole === "ROLE_MANAGER") {
//       ROUTES = ManagerRoutes;
//     } else {
//       // Handle unknown role
//     }
  
//     this.menuItems = ROUTES.filter(menuItem => menuItem);
//   }
//   public moduleOpen(id) {
//     ROUTES = ROUTES.map((mainModule) => {
//       if (mainModule.id == id)
//         mainModule.isModuleOpen = !mainModule.isModuleOpen;
//       return mainModule;
//     });
//   }
// }


export class SidebarComponent implements OnInit{
  public menuItems: any[];
  public isCollapsed = true;
  public isModule: boolean = false;
  public observaleData:Observable<any>;
public project_name:any
  constructor(
    private router: Router,
    public _authService: ServicesService,
    private routeDataService: ServicesService // Inject RouteDataService,
  ) {}

  ngOnInit() {
   this.project_name= this._authService.projectName
    this.setMenuItems();
  }

  setMenuItems() {



    let userRole:any = this._authService.getRole();
    console.log(userRole);
    let destignation_id=this._authService.get_designationId()
    console.log(destignation_id);


    //  if (userRole =="Hr"){
    //   ROUTES = HrRoutes;
    //   this.menuItems = ROUTES.filter((menuItem) => menuItem);

    // }
     if (userRole !== "Admin") {
      // If the user role is not admin, fetch dynamic routes

      let localData=localStorage.getItem("currentDesignationAndTask")
      let localDataObject = JSON.parse(localData);
      console.log(localDataObject.additionaltask)
      // console.log(localDataObject[0]?.designation[0].designationName,"DESIGNATION NAME", localDataObject[0]?.designation[0].designationId,"designation Id", localDataObject[0]?.designation[0].jobLevel,"njuhn",localDataObject[0]?.designation[0].jobLevelID);
      

// Assuming you have retrieved the data from localStorage
let localDataString = localStorage.getItem("currentDesignationAndTask");

let observableData: Observable<any>;
let observableAdditionalData: Observable<any>;

// if (localDataString) {
//   try {
//     let localDataObject = JSON.parse(localDataString);
    
//     // Extract the 'designation' property from the first element of the array
//     let designations = localDataObject[0]?.designation[0].duties;
//     let allTasks = [];

//     // Yadi aapko pata hai ki always pehla element process karna hai, to directly access karein
//     // Otherwise, yadi aapko sabhi objects pe iterate karna hai to loop use karein
//     localDataObject.forEach(item => {
//       if (item.additionaltask) {
//         let tasks = item.additionaltask.map(task => ({
//           id: task.taskId, // Yeh man kar chal rahe hain ki structure yahi hai
//           title: task.taskName, // Isi tarah se adjust karein agar structure alag hai
//           // Yahaan par additional properties ko map karein as needed
//         }));
//         allTasks.push(...tasks); // Spread operator se tasks ko allTasks array mein add karein
//       }
//     });

//     console.log(allTasks); // Yeh aapke console mein all mapped tasks ko show karega

//     // Create an Observable using 'of' operator
//     observableData = of(designations);
//     observableAdditionalData = of(allTasks)
    
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//     // Handle the error as needed
//     observableData = of(null); // You can set a default value or handle errors accordingly
//     observableAdditionalData=of(null); // You can set a default value or handle errors accordingly
//   }
// } 
//else {
//   console.warn("No data found in localStorage for key 'currentDesignationAndTask'");
//   observableData = of(null); // You can set a default value or handle absence of data accordingly
// }

// // Now you can use observableData in your code
// observableAdditionalData.subscribe((dynamicRoutes) => {
//   console.log(dynamicRoutes)
//   if (Array.isArray(dynamicRoutes)) {
//     console.log("jdhjhadj")
//     // Map dynamicRoutes to the RouteInfo format
//     const mappedRoutes: RouteInfo[] = dynamicRoutes.map((route) => ({
//       id: route.id,
//       isModuleOpen: false,
//       path: `/${route.title}`.toLowerCase(),
//       title: route.title || 'Untitled',
//       icon: 'icon',
//       color: 'color',
//       class: 'class',
//       child: route.subduties ? route.subduties.map(subduty => ({
        
        
//         name: subduty.subDutyName || 'Untitled Subduty',
//         path:`/${route.dutyName}/${subduty.subDutyName}`.toLowerCase()
        
//       })) : [],
//     }));

//     // Update the ROUTES array and menuItems
//     ROUTES = mappedRoutes;
//     console.log("sjkdjqwekljdfolj", ROUTES);
//     this.menuItems = ROUTES.filter((menuItem) => menuItem);
//   } else {
//     console.error("Dynamic routes are not an array:", dynamicRoutes);
//   }
// }, (error) => {
//   // Handle error if there's an issue fetching dynamic routes
//   console.error("Error fetching routes:", error);
// });
// observableData.subscribe((dynamicRoutes) => {
//   console.log(dynamicRoutes)
//   if (Array.isArray(dynamicRoutes)) {
//     // Map dynamicRoutes to the RouteInfo format
//     const mappedRoutes: RouteInfo[] = dynamicRoutes.map((route) => ({
//       id: route.dutiesId,
//       isModuleOpen: false,
//       path: `/${route.dutyName}`.toLowerCase(),
//       title: route.dutyName || 'Untitled',
//       icon: 'icon',
//       color: 'color',
//       class: 'class',
//       child: route.subduties ? route.subduties.map(subduty => ({
        
        
//         name: subduty.subDutyName || 'Untitled Subduty',
//         path:`/${route.dutyName}/${subduty.subDutyName}`.toLowerCase()
        
//       })) : [],
//     }));

//     // Update the ROUTES array and menuItems
//     ROUTES = mappedRoutes;
//     console.log("sjkdjqwekljdfolj", ROUTES);
//     this.menuItems = ROUTES.filter((menuItem) => menuItem);
//   } else {
//     console.error("Dynamic routes are not an array:", dynamicRoutes);
//   }
// }, (error) => {
//   // Handle error if there's an issue fetching dynamic routes
//   console.error("Error fetching routes:", error);
// });


if (localDataString) {
  try {
    let localDataObject = JSON.parse(localDataString);
    let combinedRoutes = []; // This will hold both designation and additional tasks

    // Process designation data
    // Assuming you only want to process the first item's designation[0].duties
    if (localDataObject[0]?.designation && localDataObject[0].designation.length > 0) {
      let designationRoutes = localDataObject[0].designation[0].duties.map(duty => ({
        id: duty.dutiesId, // Adjust according to your actual data structure
        isModuleOpen: false,
        path: `/${duty.dutyName}`.toLowerCase(),
        title: duty.dutyName || 'Untitled',
        icon: 'icon',
      color: 'color',
      class: 'class',
      child: duty.subduties ? duty.subduties.map(subduty => ({
        
        
                name: subduty.subDutyName || 'Untitled Subduty',
                path:`/${duty.dutyName}/${subduty.subDutyName}`.toLowerCase()
                
              })) : [],
      
        // Add more properties as needed
      }));
      combinedRoutes.push(...designationRoutes);
    }

    // Process additional tasks data
    localDataObject.forEach(item => {
      if (item.additionaltask) {
        let taskRoutes = item.additionaltask.map(task => ({
          id: task.taskId, // Ensure this matches your actual data structure
          isModuleOpen: false,
          path: `/${task.taskName}`.toLowerCase(),
          title: task.taskName || 'Untitled',
          // Add more properties as needed
        }));
        combinedRoutes.push(...taskRoutes);
      }
    });

    // Now combinedRoutes contains both designations and additional tasks
    // Create an Observable from combinedRoutes
    let observableCombinedData = of(combinedRoutes);

    observableCombinedData.subscribe((dynamicRoutes) => {
      console.log(dynamicRoutes)
      if (Array.isArray(dynamicRoutes)) {
        // Now dynamicRoutes contains both designations and additional tasks
        // Update the ROUTES array and menuItems
        const combinedRoutes = [...HrRoutes, ...dynamicRoutes];

        // Assuming ROUTES is the variable that holds the final combined routes for the UI
        // ROUTES = combinedRoutes
        ROUTES = dynamicRoutes;
        this.menuItems = ROUTES.filter((menuItem) => menuItem);
        console.log("Combined ROUTES:", ROUTES);
      } else {
        console.error("Expected dynamicRoutes to be an array:", dynamicRoutes);
      }
    }, (error) => {
      console.error("Error fetching combined routes:", error);
    });

  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Handle the error as needed, maybe set ROUTES to an empty array or a default value
    ROUTES = [];
    this.menuItems = [];
  }
} else {
  console.warn("No data found in localStorage for key 'currentDesignationAndTask'");
  // Handle absence of data accordingly, maybe set ROUTES to an empty array or a default value
  ROUTES = [];
  this.menuItems = [];
}


      
     
    } 
    
    
    
    else {  
      // If the user role is admin, use only static AdminRoutes
      ROUTES = AdminRoutes;
      this.menuItems = ROUTES.filter((menuItem) => menuItem);
    }
    

    // // Dynamically fetch route data based on user role for non-admin roles
    // if (userRole !== "ROLE_ADMIN") {
    //   this.routeDataService.getDynamicRoutes(userRole).subscribe(
    //     (dynamicRoutes) => {
    //       if (Array.isArray(dynamicRoutes)) {
    //         // Check if dynamicRoutes is an array
    //         ROUTES = [...staticAdminRoutes, ...dynamicRoutes];
    //         this.menuItems = ROUTES.filter((menuItem) => menuItem);
    //       } else {
    //         console.error("Dynamic routes are not an array:", dynamicRoutes);
    //       }
    //     },
        
    //     (error) => {
    //       console.error("Error fetching routes:", error);
    //     }
    //   );
    // } else {
    //   // For admin role, use only static AdminRoutes
    //   ROUTES = staticAdminRoutes;
    //   this.menuItems = ROUTES.filter((menuItem) => menuItem);
    // }
  } 

  public moduleOpen(id) {
    ROUTES = ROUTES.map((mainModule) => {
      if (mainModule.id == id) mainModule.isModuleOpen = !mainModule.isModuleOpen;
      return mainModule;
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
