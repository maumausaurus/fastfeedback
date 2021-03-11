import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useAuth } from '../lib/auth';
import React from 'react'
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'



const Home = () => {

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [logInError, setLogInError] = useState(undefined);
  let [isSigningUp, setIsSigningUp] = useState(false);

  console.log("email:", email, "password:", password);
  console.log(logInError);
  console.log("isSigningUp", isSigningUp)

  const auth = useAuth();

  const onSubmit = () => {
    if (isSigningUp) {
      try {
        auth.createUser(email, password)
      } catch (e) {
        setLogInError(e);
      }
    } else {
      try {
        auth.signinWithEmailPassword(email, password)
      } catch (e) {
        setLogInError(e);
      }
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Fast Feedback</h1>

        <p className="description">
          Current user: <code>{auth?.user ? auth.user.email : 'None'}</code>
        </p>

        <ChakraProvider resetCSS>
          <Container>
            {auth?.user ? (
              <button onClick={(e) => auth.signout()}>Sign Out</button>
            ) : (
                <Fragment>
                  <Button
                    variant="solid"
                    size="md"
                    mr="20px"
                    colorScheme="blackAlpha"
                    onClick={(e) => auth.signinWithGithub()}>
                    Sign in (GitHub)
                  </Button>
                  <Button
                    variant="solid"
                    size="md"
                    mr="20px"
                    colorScheme="blackAlpha"
                    onClick={(e) => auth.signinWithEmailPassword()}>
                    Sign in (email)
                  </Button>
                  <Button
                    variant="solid"
                    size="md"
                    colorScheme="purple"
                    onClick={(e) => setIsSigningUp(true)}>
                    Sign up
                  </Button>
                </Fragment>
              )}

          </Container>

          <Container display="block" mt="25px">
            <FormControl isRequired>
              <FormLabel>email</FormLabel>
              <Input
                placeholder="Enter your email"

                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb="25px" mt="25px">
              <FormLabel>password</FormLabel>
              <Input
                placeholder="Choose your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
            <Button
              variant="solid"
              size="md"
              colorScheme="purple"
              display="flex"
              rightIcon={<CheckIcon />}
              flexDirection="row"
              justifyContent="flex-start"
              boxShadow={10}
              onClick={onSubmit}
            >
              Submit
      </Button>
          </Container>
        </ChakraProvider>

      </main>



      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
