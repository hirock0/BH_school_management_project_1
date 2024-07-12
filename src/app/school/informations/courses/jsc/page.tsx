import Link from "next/link"
import Style from "./jsc.module.css"
const JSC = () => {
  return (
    <main  className={`  `}>
       <section className={`${Style.main} pt-24  mt-5 pb-10`}>
           <div className=" w-5/6 m-auto">
                <div className=" flex max-lg:flex-wrap justify-between gap-5 items-center">
                    <div className=" p-5  w-1/2 shadow-inner shadow-white max-lg:w-full backdrop:filter backdrop-blur-3xl rounded-md">
                        <h1 className=" text-center text-xl underline underline-offset-4">Best Students</h1>
                        <p style={{fontSize:"2vmin"}} className="p-5 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et optio magnam esse dicta. Error laboriosam non ea nam officiis nesciunt sunt eius consequuntur, laborum necessitatibus similique accusantium, veniam quia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam repudiandae corrupti. Fugit dignissimos iusto reprehenderit mollitia eum, quo ipsum accusamus nulla aspernatur, quas delectus expedita, culpa debitis quos amet!
                            Totam, deserunt accusantium fugit dolore facilis eos eligendi reiciendis est! Saepe distinctio accusantium non totam, nisi, quae voluptatem facere suscipit delectus corporis porro iure tenetur magnam, nemo odio? Nesciunt, sunt.
                        </p>
                        <div className=" flex items-center justify-center">
                            <Link href={""} className=" max-md:text-sm max-sm:text-xs  pr-5 pl-5 pt-2 pb-2 rounded-md bg-gradient-to-tr from-yellow-500 hover:from-yellow-600 active:from-yellow-700">
                                See the List
                            </Link>
                        </div>
                    </div>
                    <div className="  p-5  w-1/2 shadow-inner shadow-white max-lg:w-full backdrop:filter backdrop-blur-3xl rounded-md">
                        <h1 className=" text-center mt-5 text-xl underline underline-offset-4">Awards for Merits</h1>
                        <p style={{fontSize:"2vmin"}}  className=" p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et optio magnam esse dicta. Error laboriosam non ea nam officiis nesciunt sunt eius consequuntur, laborum necessitatibus similique accusantium, veniam quia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam repudiandae corrupti. Fugit dignissimos iusto reprehenderit mollitia eum, quo ipsum accusamus nulla aspernatur, quas delectus expedita, culpa debitis quos amet!
                            Totam, deserunt accusantium fugit dolore facilis eos eligendi reiciendis est! Saepe distinctio accusantium non totam, nisi, quae voluptatem facere suscipit delectus corporis porro iure tenetur magnam, nemo odio? Nesciunt, sunt.

                        </p>
                        <div className=" flex items-center justify-center">
                            <Link href={""} className=" max-md:text-sm max-sm:text-xs  pr-5 pl-5 pt-2 pb-2 rounded-md bg-gradient-to-tr from-yellow-500 hover:from-yellow-600 active:from-yellow-700">
                                See the List
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" mt-5">
                    <h1 className=" text-center text-2xl">JSC Students in School</h1>
                    <p style={{fontSize:"2vmin"}} className=" p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et optio magnam esse dicta. Error laboriosam non ea nam officiis nesciunt sunt eius consequuntur, laborum necessitatibus similique accusantium, veniam quia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam repudiandae corrupti. Fugit dignissimos iusto reprehenderit mollitia eum, quo ipsum accusamus nulla aspernatur, quas delectus expedita, culpa debitis quos amet!
                            Totam, deserunt accusantium fugit dolore facilis eos eligendi reiciendis est! Saepe distinctio accusantium non totam, nisi, quae voluptatem facere suscipit delectus corporis porro iure tenetur magnam, nemo odio? Nesciunt, sunt.
                    </p>
                </div>
            </div>
       </section>
       <section>
            
       </section>

    </main>
  )
}

export default JSC