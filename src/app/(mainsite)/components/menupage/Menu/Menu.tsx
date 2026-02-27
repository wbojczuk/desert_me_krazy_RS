import Link from 'next/link';
import Icons from '../../homepage/Icons/Icons';
import styles from './menu.module.css';

export default function Menu(){
return (
 <div className={styles.menu}>
    
    <div className={styles.menuSection}>
        <h2 className={styles.title}>Cinnamon Rolls</h2>
       <Icons />
        <div className={styles.content}>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Classic</div>
                <div className={styles.desc}>Cinnamon roll with just the right amount of cream cheese frosting to melt in your mouth.</div>
            </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>S'mores</div>
                <div className={styles.desc}>A twist of your favorite camp snack. Marshmallows and chocolate tucked inside for a burst of flavor topped with a perfect frosting with graham cracker crumbs.</div>
            </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>Banana Pudding</div>
                <div className={styles.desc}>Homemade banana pudding wrapped in a cinnamon roll topped with banana cream cheese.</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Sweet Potato Pie</div>
                <div className={styles.desc}>Your classic southern sweet potato pie.</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Peach Cobbler</div>
                <div className={styles.desc}>Sweet southern cobbler rolled in a fluffy cinnamon roll.</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Apple Pie</div>
                <div className={styles.desc}>Classic american apple pie in a soft cinnamon roll.</div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Cherry Pie</div>
                <div className={styles.desc}>Your favorite cherry pie in a more modern and flavorful cinnamon roll.</div>
            </div>
           
           <div className={styles.item}>
                <div className={styles.itemTitle}>Lemon Drop</div>
                <div className={styles.desc}>Perfect amount of lemon to tingle your taste buds</div>
            </div>

            <div className={styles.item}>
                <div className={styles.itemTitle}>Peanut Butter Chocolate</div>
                <div className={styles.desc}>Rich creamy chocolate with creamy peanut butter & chocolate frosting.</div>
            </div>
        </div>
        
    </div>

    <div className={styles.menuSection}>
        <h2 className={styles.title}>Cookies</h2>
       <Icons />
        <div className={styles.content}>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Old Fashioned Oatmeal Raisin Cookies</div>
                <div className={styles.desc}>Soft & chewy delight.</div>
            </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>S'mores Cookies</div>
                <div className={styles.desc}>A true replica of the camp fire favorite  in a cookie. Chocolate, marshmallows, with a perfect crunch of graham cracker.</div>
            </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>Old Fashioned Soft Peanut Butter Cookies</div>
                <div className={styles.desc}>Rich chewy peanut butter cookies bursting with flavor.</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Soft & Chewy Peanut Butter Chocolate Chip Cookie</div>
                <div className={styles.desc}>The perfect blend of peanut butter and chocolate chips.</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Strawberry – Seasonal</div>
                <div className={styles.desc}>Fresh strawberry cookies melt in your mouth *spring & summer*</div>
            </div>
             <div className={styles.item}>
                <div className={styles.itemTitle}>Strawberry Bliss</div>
                <div className={styles.desc}>Our seasonal strawberry cookie with cream cheese frosting.</div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Strawberry Crunch</div>
                <div className={styles.desc}>A twist on the classic strawberry crunch ice cream bar.</div>
            </div>
           
           
        </div>
        <div className={`center ${styles.linkWrapper}`}><Link className='main-link' href={"/contact"}>Order Now</Link></div>
    </div>

    <img src="/img/menu.webp" alt="image of food" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </div>
)};