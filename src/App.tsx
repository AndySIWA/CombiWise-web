/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Slides } from './pages/Slides';
import { Explore, Learn, Profile } from './pages/Placeholders';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/slides/:id" element={<Slides />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
