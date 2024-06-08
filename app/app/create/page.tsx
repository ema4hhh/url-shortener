import Form from "./_ui/Form";

function Page() {
  return (
    <main className="md:max-w-lg gap-2">
      <h4 className="text-center">Here you can create a short link, it can be randomly generated or a custom url</h4>
      <section className="flex flex-col flex-1 gap-3 w-full">
        <Form />
      </section>
    </main>
  )
}

export default Page;