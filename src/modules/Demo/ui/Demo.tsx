import React, {useState} from 'react';
import copy from '@/assets/copy.svg';
import linkIcon from '@/assets/link.svg';
import loader from '@/assets/loader.svg';
import tick from '@/assets/tick.svg';

export const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });

    const handleSubmit = async (e) => {
        alert('submitted');
    };

    const handleInputChange = (e) => {
        setArticle({
            ...article,
            url: e.target.value,
        })
    };

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/*<Search />*/}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <img src={linkIcon} alt={'Иконка ссылки'} className='absolute left-0 my-2 ml-3 w-5' />
                    <input
                        type={'url'}
                        placeholder={'Введите ссылку на статью'}
                        value={article.url}
                        onChange={handleInputChange}
                        required
                        className='url_input peer'
                    />
                    <button
                        type='submit'
                        className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
                    >
                        <p>↵</p>
                    </button>
                </form>


            </div>

        </section>
    );
};