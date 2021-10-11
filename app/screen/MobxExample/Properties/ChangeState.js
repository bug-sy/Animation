import { makeAutoObservable, autorun, trace, getDependencyTree, runInAction, observable } from "mobx"


export default class Changestate {
    title
    author
    likes
    constructor(title, author, likes) {
        makeAutoObservable(this)
        this.title = title
        this.author = author
        this.likes = likes
    }

    updateTitle(title) {
        this.title = title
    }
}

let message = new Changestate("Foo", { name: "Michel" }, ["Joe", "Sara"])

//console.log("------>", message)

// const disposer = autorun(() => {
//     console.log(message.title)
//     console.log("---->",message.author.name)
//     trace()
// })
// message.updateTitle("Bar")

// console.log("------>", message)


// runInAction(() => {
//     message.author.name = "Sara"
// })
// runInAction(() => {
//     message.author = { name: "Joe" }
// })

//console.log("-- get dependency tree ---->", getDependencyTree(disposer))
// console.log("------>", message)

// const author = message.author

// autorun(() => {
//     console.log(author)
// })

// console.log("------>", message)

// runInAction(() => {
//     message.author.name = "Sara"
// })
// runInAction(() => {
//     message.author = { name: "Joe" }
// })

// console.log("------>", message)

const twitterUrls = observable.map({
    Joe: "twitter.com/joey"
})

autorun(() => {
    console.log(twitterUrls.get("Sara"))
})

runInAction(() => {
    twitterUrls.set("Sara", "twitter.com/horsejs")
})


console.log("------>", twitterUrls)

const todosById = observable({
    "TODO-123": {
        title: "find a decent task management system",
        done: false
    }
})

todosById["TODO-456"] = {
    title: "close all tickets older than two weeks",
    done: true
}

console.log("++++++",todosById)