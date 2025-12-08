'use client';

import Form from 'next/form'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function IndividualsList() {
    return (
        <Box>
            <Form action="#">
                {/*<input type="search" placeholder="Search…"/>*/}
                <div className="flex flex-1 items-center justify-center p-2">
                    <div className="w-full max-w-lg">
                        {/*<form className="mt-5 sm:flex sm:items-center">*/}
                            <input
                                id="q"
                                name="q"
                                className="my-2 inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#1976d2] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="ابحث.." type="search"
                            />
                            <button type="submit"
                                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#3b8bdb] px-4 py-2 font-medium text-white shadow-sm hover:bg-[#0580fc] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                <SearchIcon/> ابحث
                            </button>
                        {/*</form>*/}
                    </div>
                </div>
                {/*<button type="submit">Submit</button>*/}
                {/*<SearchIcon />*/}

                {/*<div className='flex flex-1 items-center justify-center p-6'>*/}
                {/*    <input*/}
                {/*        id='w'*/}
                {/*        name='w'*/}
                {/*        type='search'*/}
                {/*        placeholder="Search..."*/}
                {/*        className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"*/}
                {/*    />*/}
                {/*    <button type="submit">Submit</button>*/}

                {/*</div>*/}
            </Form>
            <Box className="border border-gray-300">
                <List>
                    <ListItem>
                        <ListItemText primary="Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Omar Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Ali Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="John Doe" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Omar Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Ali Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="John Doe" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Omar Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Ali Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Jane Doe" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Omar Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Ali Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Jane Doe" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Omar Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Ali Mohammed Ahmed" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Jane Doe" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}