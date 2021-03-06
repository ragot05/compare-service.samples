
package com.workshare.compareservices._5_0.comparewebservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ChunkedExecuteParams complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ChunkedExecuteParams">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CompareOptions" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Modified" type="{http://schemas.microsoft.com/2003/10/Serialization/}guid" minOccurs="0"/>
 *         &lt;element name="ModifiedDocumentInfo" type="{http://workshare.com/compareservices/5.0/comparewebservice/}DocumentInfo" minOccurs="0"/>
 *         &lt;element name="Original" type="{http://schemas.microsoft.com/2003/10/Serialization/}guid" minOccurs="0"/>
 *         &lt;element name="OriginalDocumentInfo" type="{http://workshare.com/compareservices/5.0/comparewebservice/}DocumentInfo" minOccurs="0"/>
 *         &lt;element name="ResponseOption" type="{http://workshare.com/compareservices/5.0/comparewebservice/}ResponseOptions" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ChunkedExecuteParams", propOrder = {
    "compareOptions",
    "modified",
    "modifiedDocumentInfo",
    "original",
    "originalDocumentInfo",
    "responseOption"
})
public class ChunkedExecuteParams {

    @XmlElementRef(name = "CompareOptions", namespace = "http://workshare.com/compareservices/5.0/comparewebservice/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> compareOptions;
    @XmlElement(name = "Modified")
    protected String modified;
    @XmlElementRef(name = "ModifiedDocumentInfo", namespace = "http://workshare.com/compareservices/5.0/comparewebservice/", type = JAXBElement.class, required = false)
    protected JAXBElement<DocumentInfo> modifiedDocumentInfo;
    @XmlElement(name = "Original")
    protected String original;
    @XmlElementRef(name = "OriginalDocumentInfo", namespace = "http://workshare.com/compareservices/5.0/comparewebservice/", type = JAXBElement.class, required = false)
    protected JAXBElement<DocumentInfo> originalDocumentInfo;
    @XmlElement(name = "ResponseOption")
    @XmlSchemaType(name = "string")
    protected ResponseOptions responseOption;

    /**
     * Gets the value of the compareOptions property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getCompareOptions() {
        return compareOptions;
    }

    /**
     * Sets the value of the compareOptions property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setCompareOptions(JAXBElement<String> value) {
        this.compareOptions = value;
    }

    /**
     * Gets the value of the modified property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModified() {
        return modified;
    }

    /**
     * Sets the value of the modified property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModified(String value) {
        this.modified = value;
    }

    /**
     * Gets the value of the modifiedDocumentInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link DocumentInfo }{@code >}
     *     
     */
    public JAXBElement<DocumentInfo> getModifiedDocumentInfo() {
        return modifiedDocumentInfo;
    }

    /**
     * Sets the value of the modifiedDocumentInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link DocumentInfo }{@code >}
     *     
     */
    public void setModifiedDocumentInfo(JAXBElement<DocumentInfo> value) {
        this.modifiedDocumentInfo = value;
    }

    /**
     * Gets the value of the original property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginal() {
        return original;
    }

    /**
     * Sets the value of the original property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginal(String value) {
        this.original = value;
    }

    /**
     * Gets the value of the originalDocumentInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link DocumentInfo }{@code >}
     *     
     */
    public JAXBElement<DocumentInfo> getOriginalDocumentInfo() {
        return originalDocumentInfo;
    }

    /**
     * Sets the value of the originalDocumentInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link DocumentInfo }{@code >}
     *     
     */
    public void setOriginalDocumentInfo(JAXBElement<DocumentInfo> value) {
        this.originalDocumentInfo = value;
    }

    /**
     * Gets the value of the responseOption property.
     * 
     * @return
     *     possible object is
     *     {@link ResponseOptions }
     *     
     */
    public ResponseOptions getResponseOption() {
        return responseOption;
    }

    /**
     * Sets the value of the responseOption property.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseOptions }
     *     
     */
    public void setResponseOption(ResponseOptions value) {
        this.responseOption = value;
    }

}
