export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <section className="flex justify-center items-center w-full h-16 mt-8 text-sm">
      <div className="border-t py-4 border-t-black w-[450px] flex justify-center items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copyright" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
        </svg>
        <p>{year} Le Dinh Khoi. All Rights Reserved.</p>
      </div>
    </section>
  )
}