import logo from '@/assets/logo.svg';

export const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>

                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/dacorm/articles-shortener", "_blank")
                    }
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Получите краткое содержание статьи с помощью <br className='max-md:hidden'/>
                <span className='orange_gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Упростите чтение статьей с open-source OpenAI проектом, который поможет вам получить краткое содержание
                любого текста
            </h2>
        </header>
    );
};