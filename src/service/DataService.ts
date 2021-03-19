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
        let result = null
        this.$tree.forEach(theme => {
            if (theme.slug == themeSlug) {
                let topics = theme.children;
                topics.forEach(topic => {
                    if (topic.slug == topicSlug) {
                        let items = topic.children;
                        items.forEach(item => {
                            if (item.slug == itemSlug) {
                                result = item
                            }
                        });
                    }
                });
            }
        });
        return result;

    }

    getAuthor(slug: string) {
        let result = null
        for (let i in this.$tree) {
            if (this.$tree[i].slug == slug) {
                result = this.$tree[i].author
            }
        }

        return result;
    }
}


export default new DataServiceClass()