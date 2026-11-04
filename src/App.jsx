import React, { useState, useRef } from 'react';
import Header from './components/Header';
import WhatsAppForm from './components/InputForms/WhatsAppForm';
import UrlForm from './components/InputForms/UrlForm';
import WifiForm from './components/InputForms/WifiForm';
import VCardForm from './components/InputForms/VCardForm';
import SocialForm from './components/InputForms/SocialForm';
import TextForm from './components/InputForms/TextForm';

import ModuleStylePicker from './components/StyleStudio/ModuleStylePicker';
import CornerStylePicker from './components/StyleStudio/CornerStylePicker';
import ColorStudio from './components/StyleStudio/ColorStudio';
import LogoStudio from './components/StyleStudio/LogoStudio';
import PresetsGallery from './components/StyleStudio/PresetsGallery';

import QrCanvas from './components/PreviewSection/QrCanvas';
import ScannabilityBadge from './components/PreviewSection/ScannabilityBadge';
import ExportControls from './components/PreviewSection/ExportControls';

import PrintCardModal from './components/PrintCardModal';
import HistoryModal from './components/HistoryModal';

import { PRESET_THEMES } from './constants/data';

import { 
  MessageCircle, 
  Globe, 
  Wifi, 
  UserCheck, 
  Share2, 
  FileText, 
  Layers, 
  Palette, 
  Image as ImageIcon, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  // Navigation Tabs State
  const [activeTab, setActiveTab] = useState('whatsapp');
  const [currentData, setCurrentData] = useState('https://wa.me/6281234567890');
  const [activeSection, setActiveSection] = useState('form');

  // QR Styling State
  const [dotsType, setDotsType] = useState('rounded');
  const [dotsColor, setDotsColor] = useState('#25D366');
  const [dotsGradientEnable, setDotsGradientEnable] = useState(false);
  const [dotsColor2, setDotsColor2] = useState('#128C7E');
  const [dotsGradientType, setDotsGradientType] = useState('linear');

  const [cornersFrameType, setCornersFrameType] = useState('extra-rounded');
  const [cornersFrameColor, setCornersFrameColor] = useState('#128C7E');
  const [cornersDotType, setCornersDotType] = useState('dot');
  const [cornersDotColor, setCornersDotColor] = useState('#25D366');
  const [customEyesColor, setCustomEyesColor] = useState(false);

  const [bgColor, setBgColor] = useState('#ffffff');

  // Logo State
  const [selectedLogoId, setSelectedLogoId] = useState('whatsapp-green');
  const [customLogoSrc, setCustomLogoSrc] = useState(null);
  const [logoSize, setLogoSize] = useState(0.28);
  const [logoMargin, setLogoMargin] = useState(5);
  const [logoBgShape, setLogoBgShape] = useState('circle');
  const [logoBgColor, setLogoBgColor] = useState('#ffffff');

  const [currentPresetId, setCurrentPresetId] = useState('wa-official');

  // Modals State
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const qrCodeInstanceRef = useRef(null);

  // Handle Form Change
  const handleDataChange = (newData) => {
    setCurrentData(newData);
  };

  // Select Preset Handler
  const handleApplyPreset = (theme) => {
    setCurrentPresetId(theme.id);
    setDotsType(theme.dotsType);
    setDotsColor(theme.dotsColor);
    setDotsGradientEnable(theme.dotsGradientEnable || false);
    if (theme.dotsColor2) setDotsColor2(theme.dotsColor2);
    if (theme.dotsGradientType) setDotsGradientType(theme.dotsGradientType);

    setCornersFrameType(theme.cornersFrameType);
    setCornersFrameColor(theme.cornersFrameColor);
    setCornersDotType(theme.cornersDotType);
    setCornersDotColor(theme.cornersDotColor);

    setBgColor(theme.bgColor);

    setSelectedLogoId(theme.logoId);
    setLogoSize(theme.logoSize);
    setLogoBgShape(theme.logoBgShape);
    setLogoBgColor(theme.logoBgColor);
  };

  // Reset Default Handler
  const handleResetDefault = () => {
    const waDefault = PRESET_THEMES[0];
    handleApplyPreset(waDefault);
  };

  // Load Saved History Config
  const handleLoadConfig = (config) => {
    if (!config) return;
    if (config.activeTab) setActiveTab(config.activeTab);
    if (config.dotsType) setDotsType(config.dotsType);
    if (config.dotsColor) setDotsColor(config.dotsColor);
    if (config.dotsGradientEnable !== undefined) setDotsGradientEnable(config.dotsGradientEnable);
    if (config.dotsColor2) setDotsColor2(config.dotsColor2);
    if (config.cornersFrameType) setCornersFrameType(config.cornersFrameType);
    if (config.cornersFrameColor) setCornersFrameColor(config.cornersFrameColor);
    if (config.cornersDotType) setCornersDotType(config.cornersDotType);
    if (config.cornersDotColor) setCornersDotColor(config.cornersDotColor);
    if (config.customEyesColor !== undefined) setCustomEyesColor(config.customEyesColor);
    if (config.bgColor) setBgColor(config.bgColor);
    if (config.selectedLogoId) setSelectedLogoId(config.selectedLogoId);
    if (config.customLogoSrc) setCustomLogoSrc(config.customLogoSrc);
    if (config.logoSize) setLogoSize(config.logoSize);
    if (config.logoMargin) setLogoMargin(config.logoMargin);
    if (config.logoBgShape) setLogoBgShape(config.logoBgShape);
    if (config.logoBgColor) setLogoBgColor(config.logoBgColor);
  };

  const fullCurrentConfig = {
    activeTab,
    dotsType,
    dotsColor,
    dotsGradientEnable,
    dotsColor2,
    dotsGradientType,
    cornersFrameType,
    cornersFrameColor,
    cornersDotType,
    cornersDotColor,
    customEyesColor,
    bgColor,
    selectedLogoId,
    customLogoSrc,
    logoSize,
    logoMargin,
    logoBgShape,
    logoBgColor
  };

  return (
    <div className="app-container">
      <Header
        onOpenHistory={() => setIsHistoryModalOpen(true)}
        onResetDefault={handleResetDefault}
      />

      <div className="main-grid">
        {/* Left Workspace Panel */}
        <div className="workspace-panel">
          {/* Top Data Type Navigation Tabs */}
          <div className="nav-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setActiveTab('whatsapp')}
            >
              <MessageCircle size={16} /> WhatsApp Direct
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'url' ? 'active-blue' : ''}`}
              onClick={() => setActiveTab('url')}
            >
              <Globe size={16} /> Website / Link
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'wifi' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('wifi')}
            >
              <Wifi size={16} /> Wi-Fi Toko/Rumah
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'vcard' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('vcard')}
            >
              <UserCheck size={16} /> Kontak vCard
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'social' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              <Share2 size={16} /> Media Sosial
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'text' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('text')}
            >
              <FileText size={16} /> Teks Bebas
            </button>
          </div>

          {/* Sub-section Navigation (Data Form vs Shape vs Color vs Logo vs Presets) */}
          <div className="section-tabs">
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'form' ? 'active' : ''}`}
              onClick={() => setActiveSection('form')}
            >
              <SlidersHorizontal size={16} /> 1. Input Content
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'shape' ? 'active' : ''}`}
              onClick={() => setActiveSection('shape')}
            >
              <Layers size={16} /> 2. Bentuk & Frame
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'color' ? 'active' : ''}`}
              onClick={() => setActiveSection('color')}
            >
              <Palette size={16} /> 3. Warna & Gradasi
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'logo' ? 'active' : ''}`}
              onClick={() => setActiveSection('logo')}
            >
              <ImageIcon size={16} /> 4. Custom Logo
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'presets' ? 'active' : ''}`}
              onClick={() => setActiveSection('presets')}
            >
              <Sparkles size={16} style={{ color: 'var(--accent-wa)' }} /> 5. Preset Desain
            </button>
          </div>

          {/* Section 1: Content Input Forms */}
          {activeSection === 'form' && (
            <div className="section-content">
              {activeTab === 'whatsapp' && <WhatsAppForm onChange={handleDataChange} />}
              {activeTab === 'url' && <UrlForm onChange={handleDataChange} />}
              {activeTab === 'wifi' && <WifiForm onChange={handleDataChange} />}
              {activeTab === 'vcard' && <VCardForm onChange={handleDataChange} />}
              {activeTab === 'social' && <SocialForm onChange={handleDataChange} />}
              {activeTab === 'text' && <TextForm onChange={handleDataChange} />}
            </div>
          )}

          {/* Section 2: Shapes & Frames */}
          {activeSection === 'shape' && (
            <div className="section-content">
              <ModuleStylePicker
                value={dotsType}
                onChange={setDotsType}
              />
              <CornerStylePicker
                frameValue={cornersFrameType}
                eyeValue={cornersDotType}
                onFrameChange={setCornersFrameType}
                onEyeChange={setCornersDotType}
              />
            </div>
          )}

          {/* Section 3: Colors & Gradients */}
          {activeSection === 'color' && (
            <div className="section-content">
              <ColorStudio
                dotsColor={dotsColor}
                setDotsColor={setDotsColor}
                dotsGradientEnable={dotsGradientEnable}
                setDotsGradientEnable={setDotsGradientEnable}
                dotsColor2={dotsColor2}
                setDotsColor2={setDotsColor2}
                dotsGradientType={dotsGradientType}
                setDotsGradientType={setDotsGradientType}
                cornersFrameColor={cornersFrameColor}
                setCornersFrameColor={setCornersFrameColor}
                cornersDotColor={cornersDotColor}
                setCornersDotColor={setCornersDotColor}
                customEyesColor={customEyesColor}
                setCustomEyesColor={setCustomEyesColor}
                bgColor={bgColor}
                setBgColor={setBgColor}
              />
            </div>
          )}

          {/* Section 4: Custom Logo */}
          {activeSection === 'logo' && (
            <div className="section-content">
              <LogoStudio
                selectedLogoId={selectedLogoId}
                setSelectedLogoId={setSelectedLogoId}
                customLogoSrc={customLogoSrc}
                setCustomLogoSrc={setCustomLogoSrc}
                logoSize={logoSize}
                setLogoSize={setLogoSize}
                logoMargin={logoMargin}
                setLogoMargin={setLogoMargin}
                logoBgShape={logoBgShape}
                setLogoBgShape={setLogoBgShape}
                logoBgColor={logoBgColor}
                setLogoBgColor={setLogoBgColor}
              />
            </div>
          )}

          {/* Section 5: Presets Gallery */}
          {activeSection === 'presets' && (
            <div className="section-content">
              <PresetsGallery
                currentPresetId={currentPresetId}
                onSelectPreset={handleApplyPreset}
              />
            </div>
          )}
        </div>

        {/* Right Sticky Preview Panel */}
        <div className="preview-sticky-wrapper">
          <div className="preview-panel">
            <h3 className="font-heading" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-main)' }}>
              LIVE QR CODE PREVIEW
            </h3>

            {/* Canvas QR Code Display */}
            <QrCanvas
              qrCodeInstanceRef={qrCodeInstanceRef}
              data={currentData}
              dotsType={dotsType}
              dotsColor={dotsColor}
              dotsGradientEnable={dotsGradientEnable}
              dotsColor2={dotsColor2}
              dotsGradientType={dotsGradientType}
              cornersFrameType={cornersFrameType}
              cornersFrameColor={cornersFrameColor}
              cornersDotType={cornersDotType}
              cornersDotColor={cornersDotColor}
              customEyesColor={customEyesColor}
              bgColor={bgColor}
              selectedLogoId={selectedLogoId}
              customLogoSrc={customLogoSrc}
              logoSize={logoSize}
              logoMargin={logoMargin}
              logoBgShape={logoBgShape}
              logoBgColor={logoBgColor}
            />

            {/* Readability Indicator Badge */}
            <ScannabilityBadge
              hasLogo={selectedLogoId !== 'none' || Boolean(customLogoSrc)}
              logoSize={logoSize}
              bgColor={bgColor}
              dotsColor={dotsColor}
            />

            {/* Export Toolbar */}
            <ExportControls
              qrCodeInstanceRef={qrCodeInstanceRef}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrintCardModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        qrConfig={fullCurrentConfig}
        currentData={currentData}
      />

      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        currentConfig={fullCurrentConfig}
        onLoadConfig={handleLoadConfig}
      />
    </div>
  );
}
