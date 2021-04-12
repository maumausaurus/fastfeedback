import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useAuth } from '../lib/auth';
import React from 'react'
import {
  ChakraProvider,
  Container,
  Button,
  Flex
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import ModalSignIn from '../components/ModalSignIn'
import ModalSignUp from '../components/ModalSignUp'
import EmptyState from '../components/EmptyState';
import DashboardShell from '../components/DashboardShell';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';


const Dashboard = () => {
  const auth = useAuth();
  const { data, ...rest } = useSWR('/api/sites', fetcher);

  const sites = data?.sites
  // const sitesNames = sites.map((site) => site.name)

  console.log("sites:", sites)

  if (!auth.user) {
      return "You can't access dashboard if you're not logged in";
  }

  if (!sites) {
    return (
      <DashboardShell>
        <EmptyState />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      {
        sites.map((site) =>
         <div>  
           {site.name}
           {site.link}
         </div>
        )
      }
    </DashboardShell>
  );
};

export default Dashboard;
