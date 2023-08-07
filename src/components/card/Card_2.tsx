

export default function Card_2() {
    return (
        <article className="w-full overflow-hidden rounded-lg shadow-lg h-4/6">

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
    );
}

