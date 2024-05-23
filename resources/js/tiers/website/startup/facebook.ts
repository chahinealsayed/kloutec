/**
 * facebook.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Tuesday, October 3, 2023 at 03:58 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/facebook.vue"
import bootstrap from "../bootstrap/facebook"

const app = createApp("facebook", AppComponent)
bootstrap(app)
app.mount()
