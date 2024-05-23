/**
 * ContactForm.vue Startup File
 *
 * @project kloutec
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Saturday, October 7, 2023 at 11:16 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/ContactForm.vue"
import bootstrap from "../bootstrap/ContactForm"

const app = createApp("contactform", AppComponent)
bootstrap(app)
app.mount()
