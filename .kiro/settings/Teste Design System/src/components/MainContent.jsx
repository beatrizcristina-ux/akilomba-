import React from 'react';
import HomePage from '../pages/HomePage';
import IntroductionPage from '../pages/IntroductionPage';
import PrinciplesPage from '../pages/PrinciplesPage';
import GovernancePage from '../pages/GovernancePage';
import TokensPage from '../pages/TokensPage';
import ColorsPage from '../pages/foundations/ColorsPage';
import TypographyPage from '../pages/foundations/TypographyPage';
import SpacingPage from '../pages/foundations/SpacingPage';
import ElevationPage from '../pages/foundations/ElevationPage';
import ComponentPage from '../pages/components/ComponentPage';
import PatternPage from '../pages/patterns/PatternPage';
import ResourcePage from '../pages/resources/ResourcePage';

const MainContent = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'introduction':
        return <IntroductionPage />;
      case 'principles':
        return <PrinciplesPage />;
      case 'governance':
        return <GovernancePage />;
      case 'tokens':
        return <TokensPage />;
      case 'colors':
        return <ColorsPage />;
      case 'typography':
        return <TypographyPage />;
      case 'spacing':
        return <SpacingPage />;
      case 'elevation':
        return <ElevationPage />;
      case 'grid':
      case 'icons':
      case 'motion':
      case 'accessibility':
        return <ComponentPage title="Foundation" type="foundation" id={activeSection} />;
      case 'button':
      case 'input':
      case 'card':
      case 'modal':
      case 'navigation':
      case 'feedback':
      case 'data-display':
        return <ComponentPage title="Componente" type="component" id={activeSection} />;
      case 'forms':
      case 'navigation-patterns':
      case 'feedback-patterns':
      case 'lists':
        return <PatternPage id={activeSection} />;
      case 'design-tokens':
      case 'downloads':
      case 'best-practices':
        return <ResourcePage id={activeSection} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default MainContent;