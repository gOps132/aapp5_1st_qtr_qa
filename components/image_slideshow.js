import image_styles from '../styles/Image.module.css';
import slideshow_styles from '../styles/SlideShow.module.css';
import Image from 'next/image';

const ISS = ({p_index, p_main_images, p_size=500}) => {
    return (
        <div className={slideshow_styles.slideshow}
            style={{ maxWidth: `${p_size}px` }}
        >
            <div
                className={slideshow_styles.slideshowSlider}
                style={{ transform: `translate3d(${-p_index * 100}%, 0, 0)` }}
            >
                {p_main_images.map((t, i) => (
                    <div
                        key={i}
                        className={image_styles.image_transform_container}
                        style={{
                            visibility: `${i == p_index ? "visible" : "hidden"}`,
                            opacity: (i == p_index ? 1 : 0),
                            display: 'inline',
                        }}
                    >
                        <Image
                            className={image_styles.image_border_circle}
                            src={`/img/profile/${t.filename}`}
                            width={p_size}
                            height={p_size}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ISS;