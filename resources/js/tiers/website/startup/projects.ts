/**
 * projects.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Friday, October 13, 2023 at 09:20 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/projects.vue"
import bootstrap from "../bootstrap/projects"

const app = createApp("projects", AppComponent)
bootstrap(app)
app.mount()
