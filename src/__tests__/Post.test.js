import React from 'react';
import { render, act } from '@testing-library/react';
import Post from '../../src/views/Post';
import axios from 'axios';
import { MemoryRouter } from 'react-router';
import { posts } from './__data__/testData';

it('Test to see if post actually renders a post', async () => {
    let post = posts[0]
    let container;
    jest
        .spyOn(axios, 'get')
        .mockImplementation(() => Promise.resolve({ data: post }))
    await act(async () => {
        const component = render(
            <MemoryRouter>
                <Post match={{ params: { postId: 1 } }} />
            </MemoryRouter>,
        );
        container = component.container
    })
    expect(container.textContent).toContain(post.text)
});