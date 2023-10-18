<?php

namespace App\Form;

use App\Entity\Article;
use App\Entity\Editeur;
use App\Entity\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre')
            ->add('resume')
            ->add('contenu')
            ->add('tags', EntityType::class, [
                'class' => Tag::class,
                'choice_label' => 'nom',
                'multiple' => true,
                'expanded' => true,
                'attr' => [
                    'class' => 'checkbox',
                ],
            ])
            ->add('editeurs', EntityType::class, [
                'class' => Editeur::class,
                'choice_label' => function ($editeur) {
                    return $editeur->getNom() . ' ' . $editeur->getPrenom();
                },
                'multiple' => true,
                'expanded' => true,
                'attr' => [
                    'class' => 'checkbox',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}