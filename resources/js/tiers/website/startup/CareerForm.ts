/**
 * CareerForm.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Tuesday, October 10, 2023 at 12:04 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/CareerForm.vue"
import bootstrap from "../bootstrap/CareerForm"

const app = createApp("careerform", AppComponent)
bootstrap(app)
app.mount()
