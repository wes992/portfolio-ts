import { Grid, Link, Typography } from "@mui/material";
import { socialLinks, useLabels, Labels } from "../../utils/config";

const SocialLinks = () => {
  const labels = useLabels(Labels.SOCIAL)!;
  return (
    <Grid container direction="column" alignItems={"center"} gap={2}>
      <Typography variant="body1">{labels.get("header")}</Typography>
      <Grid container gap={2}>
        {socialLinks.map((link, index) => (
          <Grid key={index + link.name} item>
            <Link
              underline="none"
              href={link.url}
              component="a"
              target={link.target}
              rel="noreferrer"
            >
              {link.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export { SocialLinks };
