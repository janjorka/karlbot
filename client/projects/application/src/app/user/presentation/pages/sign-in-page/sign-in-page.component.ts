
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";
import { LoadingService } from "projects/application/src/app/shared/application/services/loading-service";
import { SignInService } from "projects/application/src/app/shared/application/services/sign-in.service";
import { PageComponent } from "projects/application/src/app/shared/presentation/components/page/page.component";
import { GoogleSignInButtonComponent } from "../../components/google-sign-in-button/google-sign-in-button.component";

/**
 * Page allowing the user to sign in.
 */
@Component({
    selector: "app-sign-in-page",
    imports: [MatIconModule, PageComponent, MatCardModule, GoogleSignInButtonComponent],
    templateUrl: "./sign-in-page.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./sign-in-page.component.css"]
})
export class SignInPageComponent {
    /**
     * Whether signing in is in progress.
     */
    inProgress = false;

    constructor(private readonly signInService: SignInService, private readonly router: Router, private readonly loadingService: LoadingService) { }

    async onSignInWithGoogleClick() {
        this.inProgress = true;
        this.loadingService.addLoading();
        try {
            const success = await this.signInService.signInWithGoogle();
            if (success)
                await this.router.navigateByUrl("/projects");
        }
        finally {
            this.inProgress = false;
            this.loadingService.removeLoading();
        }
    }
}
