import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <br/>
      <br/>
      <div>
      <iframe width="1800"
        height="800"
        src=
        "https://blogspaceteknopoli.blogspot.com/"
        title="İletişim" >
      </iframe>
    </div>
    </div>
  );
}
