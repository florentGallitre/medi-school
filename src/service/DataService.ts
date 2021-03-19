import axios from "axios"

class DataServiceClass {
    $data: any;
    $tree: Array<any>;
    $isLoaded: boolean = false;

    load(): Promise<any> {
        if (this.$isLoaded) {
            console.log("Data already loaded, good!")
            return Promise.resolve()
        }

        return new Promise((resolve, reject) => {
            console.log("Data not loaded already, reloading")
            axios.get("./data.json")
                .then(response => {
                    this.$data = response.data
                    this.$isLoaded = true
                    this.$tree = response.data.tree
                    resolve()
                }).catch(e => {
                    console.log(e)
                    this.$isLoaded = false
                    reject(e)
                })
        })
    }

    getTopicJson(slug: string) {
        let result = null
        for (let i in this.$tree) {
            if (this.$tree[i].slug == slug) {
                result = this.$tree[i]
            }
        }
        return result;
    }

    getItemJson(themeSlug: any, topicSlug: any, itemSlug: any) {
        let item = null
        for ( let h in this.$tree) {
            if (this.$tree[h].slug == themeSlug) {
                let theme = this.$tree[h].children
                for (let i in theme) {
                    if (theme[i].slug == topicSlug) {
                        let topics = theme[i].children
                        for ( let value in topics ) {
                            if (topics[value].slug == itemSlug) {
                                item = topics[value]
                            }
                        }
        
                    }
                }
            }
        return item;
        }
    }
}


export default new DataServiceClass()