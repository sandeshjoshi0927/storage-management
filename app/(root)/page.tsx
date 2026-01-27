import Card from "@/components/Card";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";

export default async function Home() {
  const files = await getFiles({ types: [] });

  return (
    <div>
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
}
