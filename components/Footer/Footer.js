import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import './footer.scss';
const Footer = () => {
    return(
        <footer id="footer">
            <div className="postCard">
                <h3 className="postCard_title">Need Web Solution?</h3>
            <Grid container spacing={3}>
            <Grid className="footer_left" item xs={12} sm={12} lg={6} xl={6}>
                <div className="footer_left_wrap">
                <img src="https://ik.imagekit.io/zkvrzayer06/tr:w-350,f-auto/logo_eLCgigxsk.png"/>
                <p className="footer_logo_info">
                Our projects are typically broken into 5 or 6 key "milestones" which focus heavily on the design collaboration in the early stages. We mock-up any interactive or unique page within your new website so that you get a clear picture of exactly how your design vision will be translated into a functional website.
                </p>
                <div className="footer_info">
                    <p>
                        Phone: +91-7016921639
                    </p>
                    <p>
                        Email: hello@ontimewebservices.com
                    </p>
                    <p>
                        Address: D-249, Vibhag-1, Parshawnath Township,<br/>New Naroda, Krishnanagar, Ahmedabad, <br/>Gujarat, India - 382 345
                    </p>
                </div>
                </div>
            </Grid>
            <Grid className="footer_right" item xs={12} sm={12} lg={6} xl={6}>
            <div className="footer_right_wrap">
            <h3 className="need">Fill Out The Form Below To Get A Free Consultation.</h3>
            <form>
                <div>
                <label>
                    <p>Name</p>
                <input type="text"/>
                </label>
                </div>
                <div>
                <label>
                    <p>Email</p>
                <input type="text"/>
                </label>
                </div>
                <div>
                <label>
                    <p>Phone</p>
                <input type="text"/>
                </label>
                </div>
                <div>
                <label>
                    <p>Project Details</p>
                <textarea/>
                </label>
                </div>
                <button type="submit">Send</button>
            </form>
            </div>
            </Grid>
            </Grid>
            <div className="stamp">
            <img src="https://ik.imagekit.io/zkvrzayer06/tr:w-150,f-auto/coastal_frigatebird_agJbd1TLQ.png"/>
            <p>Postal Stamp</p>
            </div>
            </div>
        </footer>
    );
}
export default Footer;