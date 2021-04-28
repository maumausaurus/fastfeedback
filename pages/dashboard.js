import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useAuth } from '../lib/auth';
import React from 'react'
import {
  ChakraProvider,
  Container,
  Button,
  Flex, 
  Box, 
  Input, 
  IconButton, 
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import ModalSignIn from '../components/ModalSignIn'
import ModalSignUp from '../components/ModalSignUp'
import EmptyState from '../components/EmptyState';
import DashboardShell from '../components/DashboardShell';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import SiteTable from '../components/SiteTable';
import SearchBar from '../components/SearchBar';


const Dashboard = () => {
  const auth = useAuth();
  const { data, ...rest } = useSWR('/api/sites', fetcher);
  const [searchContent, setSearchContent] = useState('');

  const sites = data?.sites
  console.log("sites:", sites)

  // const sitesNames = sites.map((site) => site.name)

  const filteredSites = sites.filter((site) => {
    // afficher tous les sites quand la recherche n'est pas utilisée
    if (searchContent === '') {
      return true
    }  
    // sinon afficher uniquement les sites qui matchent la recherche 
    return site.name.toLowerCase === searchContent.toLowerCase
  }); 

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
      <SearchBar 
        onSearchContentUpdate={(searchContent)=> setSearchContent(searchContent)}
      />
      <SiteTable sites={filteredSites} />
    </DashboardShell>
  );
};

export default Dashboard;
