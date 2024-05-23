/**
 * sidemenu.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Tuesday, October 3, 2023 at 12:29 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/sidemenu.vue"
import bootstrap from "../bootstrap/sidemenu"

const app = createApp("sidemenu", AppComponent)
bootstrap(app)
app.mount()
