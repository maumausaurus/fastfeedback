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
//import SiteTableSkeleton from '../components/SiteTableSkeleton';
import useSWR from 'swr';



const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);


  if (!auth.user) {
      return "You can't access dashboard if you're not logged in";
  }
  return <DashboardShell>
    <EmptyState />
  </DashboardShell>
};

export default Dashboard;
