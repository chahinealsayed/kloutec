/**
 * ContactUsForm.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 9, 2023 at 09:16 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/ContactUsForm.vue"
import bootstrap from "../bootstrap/ContactUsForm"

const app = createApp("contactusform", AppComponent)
bootstrap(app)
app.mount()
