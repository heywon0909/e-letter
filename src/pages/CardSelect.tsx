export default function CardSelect() {
    return (
       <section className='w-full md:h-full flex flex-col justify-center items-center'>  
        <div className='md:w-3/4 w-11/12 flex justify-center'>
            <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-4 h-70 w-full'>
               <article className="overflow-hidden rounded-lg shadow-lg bg-template h-72 p-4">
                <div className="flex flex-col items-center justify-center bg-white h-full">
                    <h1 className="text-sm">
                        ooo에게
                    </h1>
                    <p className="text-grey-darker text-sm w-full">
                        ....
                    </p>
                </div>

                

                </article>
                <article className="overflow-hidden rounded-lg shadow-lg h-72">

                <a href="#">
                    <img alt="Placeholder" className="block h-3/5 w-full" src="https://picsum.photos/600/400/?random" />
                </a>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </div>

                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </div>

                </article>
                <article className="overflow-hidden rounded-lg shadow-lg h-72">

                <a href="#" className='w-full flex justify-center'>
                    <img alt="Placeholder" className="block rounded-full w-28 h-28" src="https://picsum.photos/600/400/?random" />
                </a>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </div>

                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </div>

               </article>
            </ul>
            </div>
        </section>    
    );
}

