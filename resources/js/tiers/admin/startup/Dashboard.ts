/**
 * Dashboard.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Tuesday, October 3, 2023 at 10:42 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Dashboard.vue"
import bootstrap from "../bootstrap/Dashboard"

const app = createApp("dashboard", AppComponent)
bootstrap(app)
app.mount()
