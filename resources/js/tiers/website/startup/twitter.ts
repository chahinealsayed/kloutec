/**
 * twitter.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Tuesday, October 3, 2023 at 03:58 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/twitter.vue"
import bootstrap from "../bootstrap/twitter"

const app = createApp("twitter", AppComponent)
bootstrap(app)
app.mount()
