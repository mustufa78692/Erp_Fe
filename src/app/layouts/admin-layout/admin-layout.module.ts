import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/admin-pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { AdminProfileComponent } from "../../pages/admin-pages/admin-profile/admin-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HumanResourcesManagementComponent } from "../../pages/admin-pages/human-resources-management/human-resources-management.component";
import { WarehouseManagementComponent } from "../../pages/admin-pages/warehouse-management/warehouse-management.component";
import { InventoryManagementComponent } from "../../pages/admin-pages/inventory-management/inventory-management.component";
import { OrderManagementComponent } from "../../pages/admin-pages/order-management/order-management.component";
import { SupplyChainManagementComponent } from "../../pages/admin-pages/supply-chain-management/supply-chain-management.component";
import { NewEmployeeComponent } from "src/app/pages/admin-pages/human-resources-management/new-employee/new-employee.component";


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    AdminProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    OrderManagementComponent,
    HumanResourcesManagementComponent,
    WarehouseManagementComponent,
    InventoryManagementComponent,
    SupplyChainManagementComponent,
    NewEmployeeComponent,
    
  ],
})
export class AdminLayoutModule {}
