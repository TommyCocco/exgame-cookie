import Router from "@koa/router"

const router = new Router({
    prefix: "/teachers",
})

//all teachers
router.get("/", (ctx) =>{
    ctx.body = "ciao questa è una prova"
})

//find teacher
router.get("/:id", (ctx) =>{
})

//add a new teacher
router.post("/", (ctx) =>{
})

//edit teacher
router.put("/:id", (ctx) =>{
})

router.delete("/:id", (ctx) =>{
})

export default router