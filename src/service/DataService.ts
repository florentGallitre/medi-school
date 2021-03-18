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
                    console.log("data loaded")
                    resolve()
                }).catch(e => {
                    console.log(e)
                    this.$isLoaded = false
                    reject(e)
                })
        })
    }

    getTopicJson(slug: string): Promise<any> {
        return new Promise(() => {
            if (this.$isLoaded) {
                this.$tree.forEach(element => {
                    if (element.slug == slug) {
                        console.log(element)
                        return element
                    }
                });
            }
        })


    }
}

export default new DataServiceClass()