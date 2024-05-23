/**
 * careers.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Friday, October 13, 2023 at 11:21 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/careers.vue"
import bootstrap from "../bootstrap/careers"

const app = createApp("careers", AppComponent)
bootstrap(app)
app.mount()
