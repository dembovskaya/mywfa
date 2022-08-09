import {FC, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = {
    input: {
      padding: '12px',
      borderRadius: '20px',
      margin: '10px'
    }
  };

  return (
    <Grid sx={{flexDirection: 'column', display: 'flex'}}>
      <input
        style={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        style={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <Button sx={{color: 'primary.contrastText'}}
        onClick={() => handleClick(email, password)}
      >
        {title}
      </Button>
    </Grid>
  )
};

export default Form;
