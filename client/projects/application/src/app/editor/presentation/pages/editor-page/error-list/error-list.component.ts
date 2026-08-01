
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { Error } from "karel";
import { PanelComponent } from "../../../components/panel/panel.component";

/**
 * Shows errors in the program.
 */
@Component({
    selector: "app-error-list",
    imports: [MatIconModule, MatListModule, PanelComponent],
    templateUrl: "./error-list.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./error-list.component.css"]
})
export class ErrorListComponent {
    /**
     * Errors to be shown.
     */
    @Input()
    errors: readonly Error[] = [];
}
