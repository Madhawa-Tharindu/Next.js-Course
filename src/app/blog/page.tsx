import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "No Author" 
    },
};

export default function Blog() {
    return(
        <h1>My Blog</h1>
    )
}