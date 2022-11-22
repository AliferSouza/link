export default async function getInfo() {
    let url = '../../api.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
