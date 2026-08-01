
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";

/**
 * Panel of the editor.
 */
@Component({
    selector: "app-panel",
    imports: [MatDividerModule],
    templateUrl: "./panel.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./panel.component.css"]
})
export class PanelComponent {
    /**
     * Title of the panel.
     */
    @Input()
    header = "";
}
