// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { registerElement } from "nativescript-angular/element-registry";

// Importamos el modulo principal
import { AppModule } from "./pages/mobile/app.module";

//registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

platformNativeScriptDynamic().bootstrapModule(AppModule);
