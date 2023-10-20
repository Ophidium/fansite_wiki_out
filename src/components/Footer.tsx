import Link from "next/link"
import styles from "../styles/Footer.module.css"
import Image from "next/image";
import { Grid, Divider } from "@mui/material"

const Footer = () => {

    return (
        <Grid container item spacing={{xs: 3, sm: 0.5}} className={styles.Footer} padding={"1rem 2rem"} >
            <Grid item xs={12} className={styles.logo}> logo</Grid>
            {/*TODO manier vinden zodat de dividers netjes naast elkaar staan als het moet */}
            <Grid container item xs={12} sm={3} >
                <Grid item xs={12}>HET ZOEKPLATFORM VOOR FOTOGRAFEN</Grid>
                <Grid item xs={12}><Divider /></Grid>
                <Grid item xs={12}>Mussenstraat 55 1233<br />RB Hilversum<br />info@fotologue.nl</Grid>
                <Grid item xs={12}>035-6720248</Grid>
                <Grid item xs={12}>KVK: 30161209</Grid>
            </Grid>
            <Grid container item xs={12} sm={3} >
                <Grid item xs={12}>OVER ONS</Grid>
                <Grid item xs={12}><Divider /></Grid>
                <Grid item xs={12}>Wat is Fotologue</Grid>
                <Grid item xs={12}>Hoe werkt Fotologue</Grid>
                <Grid item xs={12}>Onze vediensten</Grid>
                <Grid item xs={12}>Fotografen</Grid>
                <Grid item xs={12}>veelgestelde vragen</Grid>
                <Grid item xs={12}><Link href="/contact">Contact</Link></Grid>
            </Grid>
            <Grid container item xs={12} sm={3}>
                <Grid item xs={12}>VOOR FOTOGRAFEN</Grid>
                <Grid item xs={12}><Divider /></Grid>
                <Grid item xs={12}>Waarom Fotologue</Grid>
                <Grid item xs={12}>Garanties</Grid>
                <Grid item xs={12}>Soorten Fotografie</Grid>
                <Grid item xs={12}>Registreen een account</Grid>
                <Grid item xs={12}>Klantenservice</Grid>
            </Grid>
            <Grid container item xs={12} sm={3}>
                <Grid item xs={12}>VOLG ONS OP SOCIAL MEDIA</Grid>
                <Grid item xs={12}><Divider /></Grid>
                <Grid item xs={12}>icon split in vier</Grid>
                <Grid item xs={12}>SCHRIJF JE IN VOOR DE NIEUWSBRIEF EN ONTVANG UPDATES</Grid>
                <Grid item xs={12}><input></input></Grid>
                <Grid item xs={12}>button</Grid>
            </Grid>
            <Grid item xs={12} >
                {/*TODO beteree divider maken */}
                <div className={styles.Terms}>
                    <Link href="/">Algemene voorwaarden</Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link href="/">Cookieverklaring</Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link href="/">Privacyverklaring</Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link href="/">Sitemap</Link>
                </div>

            </Grid>
        </Grid>

    );
}

export default Footer;