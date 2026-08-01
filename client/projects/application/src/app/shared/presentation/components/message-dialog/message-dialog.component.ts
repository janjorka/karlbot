
import { Component, Inject, ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ValidatedInputDirective } from "../../directives/validated-input.directive";

/**
 * Dialog displaying a message.
 */
@Component({
    selector: "app-message-dialog",
    imports: [MatDialogModule, ValidatedInputDirective, MatButtonModule],
    templateUrl: "./message-dialog.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./message-dialog.component.css"]
})
export class MessageDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) readonly data: MessageDialogData) { }
}

/**
 * Configuration of {@link MessageDialogComponent}.
 */
export interface MessageDialogData {
    readonly title: string;
    readonly message: string;
}